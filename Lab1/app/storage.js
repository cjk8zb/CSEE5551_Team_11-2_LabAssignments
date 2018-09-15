'use strict';
angular.module('lab1App').factory('storage', ['$window', function({localStorage, sessionStorage}) {

    try {
        const key = 'app.storage.local.testing';
        localStorage.setItem(key, key);
        localStorage.removeItem(key);
    } catch(e) {
        // Use in-memory storage as a fail-safe.
        return {local: {}, session: {}};
    }

    const handler = {
        get: function (obj, prop) {
            const value = obj[prop];
            return value && JSON.parse(value);
        },
        set: function (obj, prop, value) {
            obj[prop] = JSON.stringify(value);
            return true;
        }
    };

    return {
        local: new Proxy(localStorage, handler),
        session: new Proxy(sessionStorage, handler),
    };
}]);
