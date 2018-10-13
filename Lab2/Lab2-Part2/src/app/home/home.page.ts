import {Component} from '@angular/core';
import * as Clarifai from 'clarifai';
import {HttpClient} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    model = 'bd367be194cf45149e75f01d59f77ba7';
    app = new Clarifai.App({
        apiKey: 'd984ad95fe2242d3b25f8b0164d91be1'
    });
    imageUrl?: string;
    ingredients: string[];
    currentIngredient?: any;

    constructor(private http: HttpClient,
                private toastController: ToastController,
                private camera: Camera) {
    }

    async foo() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        const imageData = await this.camera.getPicture(options);
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
        this.imageUrl = 'data:image/jpeg;base64,' + imageData;


        // this.imageUrl = 'https://samples.clarifai.com/food.jpg';
        const {
            outputs: [{
                data: {
                    concepts = []
                } = {}
            } = {}] = []
        } = await this.app.models.predict(this.model, {base64: imageData});

        this.ingredients = [];
        for (const {name, value} of concepts) {
            // if (value >= 0.95) {
                this.ingredients.push(name);
            // }
        }
        console.log(this.ingredients);
        if (this.ingredients.length > 10000) {

        }
    }

    private async getNutrients(index: number) {
        const first = this.ingredients[index];
        const app_id = '0ef548b1';
        const app_key = '35fa7984d8f9dbc8a2601903abc197cf';
        const url = 'https://api.edamam.com/api/food-database/parser?ingr='
            + first
            + '&app_id=' + app_id
            + '&app_key=' + app_key;
        console.log(url);
        const {
            parsed = [],
            hints = []
        } = await this.http.get<any>(url).toPromise();
        console.log(parsed, hints);

        if (parsed.length) {
            this.showNutrients(parsed);
        } else if (hints.length) {
            this.showNutrients(hints);
        } else {
            const toast = await this.toastController.create({
                message: 'Nutrition Information Not Available.',
                duration: 2000
            });
            toast.present();
        }
    }

    private showNutrients(results: any) {
        console.log(results);
        const [{food: {foodId, label, measure, nutrients}}] = results;
        console.log(foodId, label, measure, nutrients);
        this.currentIngredient = {
            label,
            nutrients: []
        };
        for (const [key, {name, unit}] of Object.entries(NTR)) {
            const nutrient = nutrients[key];
            if (nutrient) {
                this.currentIngredient.nutrients.push({name, value: nutrient.toFixed(2), unit});
            }
        }
    }


    hideFooter() {
        this.currentIngredient = null;
    }
}


const NTR = {
    CA: {name: 'Calcium', unit: 'mg'},
    ENERC_KCAL: {name: 'Calories', unit: 'kcal'},
    CHOCDF: {name: 'Carbs', unit: 'g'},
    NIA: {name: 'Niacin (B3)', unit: 'mg'},
    CHOLE: {name: 'Cholesterol', unit: 'mg'},
    P: {name: 'Phosphorus', unit: 'mg'},
    FAMS: {name: 'Monounsaturated', unit: 'g'},
    PROCNT: {name: 'Protein', unit: 'g'},
    FAPU: {name: 'Polyunsaturated', unit: 'g'},
    RIBF: {name: 'Riboflavin (B2)', unit: 'mg'},
    FASAT: {name: 'Saturated', unit: 'g'},
    SUGAR: {name: 'Sugars', unit: 'g'},
    FAT: {name: 'Fat', unit: 'g'},
    THIA: {name: 'Thiamin (B1)', unit: 'mg'},
    FATRN: {name: 'Trans', unit: 'g'},
    TOCPHA: {name: 'Vitamin E', unit: 'mg'},
    FE: {name: 'Iron', unit: 'mg'},
    VITA_RAE: {name: 'Vitamin A', unit: 'æg'},
    FIBTG: {name: 'Fiber', unit: 'g'},
    VITB12: {name: 'Vitamin B12', unit: 'æg'},
    FOLDFE: {name: 'Folate (Equivalent)', unit: 'æg'},
    VITB6A: {name: 'Vitamin B6', unit: 'mg'},
    K: {name: 'Potassium', unit: 'mg'},
    VITC: {name: 'Vitamin C', unit: 'mg'},
    MG: {name: 'Magnesium', unit: 'mg'},
    VITD: {name: 'Vitamin D', unit: 'æg'},
    NA: {name: 'Sodium', unit: 'mg'},
    VITK1: {name: 'Vitamin K', unit: 'æg'}
};
