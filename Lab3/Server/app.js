const express = require('express');
const path = require('path');
const WebSocket = require('ws');
const MongoClient = require('mongodb').MongoClient;

const app = express();
let database;

// CORS
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	next();
});

app.use(express.json());

//Your added functions
const url = 'mongodb://root:password1@ds147233.mlab.com:47233/lab3';

app.get('/chatroom', async function (req, res) {
	const topics = {};
	const collections = await database.listCollections().toArray();
	for (const {name} of collections) {
		if (name.startsWith('system.')) {
			continue;
		}
		const messages = await database.collection(name).find({}).toArray();
		topics[name] = {messages};
		console.log('collection', name, 'messages', messages);
	}
	res.json(topics);
});

app.post('/chatroom', function (req, res) {
	const topic = req.body.topic;
	console.log('posted', req.body);
	database.createCollection(topic).then(value => {
		res.status(201);
		console.log('createCollection', value);
		broadcast({topic});
	});
});

app.delete('/chatroom', function (req, res) {
	console.log('delete', req.query);
	const deleteTopic = req.query.topic;
	database.dropCollection(deleteTopic).then(value => {
		res.status(201);
		console.log('dropCollection', value);
		broadcast({deleteTopic});
	});
});

app.use(express.static(path.join(__dirname, 'chat-client')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'chat-client/index.html'));
});

let sockets = [];

function broadcast(json) {
	sockets = sockets.filter(socket => {
		try {
			socket.send(JSON.stringify(json));
			return true
		} catch (e) {
			console.error('Removing socket:', e);
			return false;
		}
	});
}

MongoClient.connect(url, {useNewUrlParser: true}).then(client => {
	database = client.db();
	console.log("Connected to MongoDB");
	const PORT = process.env.PORT || 3000;
	const server = app.listen(PORT, function () {
		const host = server.address().address;
		const port = server.address().port;

		console.log("App listening at http://%s:%s", host, port)
	});
	const wss = new WebSocket.Server({server});
	wss.on('connection', (ws) => {
		ws.on('message', (message) => {
			const json = JSON.parse(message);
			if (json.join) {
				sockets.push(ws);
				broadcast({joined: json.join});
			} else if (json.send) {
				const {topic, text, sender} = json.send;
				database.collection(topic).insertOne({sender, text});
				broadcast({message: json.send});
			} else {
				ws.send(JSON.stringify({error: {json}}));
			}
		});
	});
}).catch(err => {
	console.log("Error connecting to MongoDB", err);
});

module.exports = app;
