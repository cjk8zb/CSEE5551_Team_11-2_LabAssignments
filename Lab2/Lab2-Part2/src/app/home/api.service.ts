import {Injectable} from '@angular/core';
import * as Clarifai from 'clarifai';
import {HttpClient} from '@angular/common/http';

const clarifaiOptions = {
    model: 'bd367be194cf45149e75f01d59f77ba7',
    apiKey: 'd984ad95fe2242d3b25f8b0164d91be1',
};

const edamamOptions = {
    app_id: '0ef548b1',
    app_key: '35fa7984d8f9dbc8a2601903abc197cf'
};

@Injectable()
export class ApiService {

    clarifaiApp = new Clarifai.App({
        apiKey: clarifaiOptions.apiKey
    });

    constructor(private http: HttpClient) {
    }

    static handlePredictResults(results): Concept[] {
        const {outputs: [{data: {concepts = []} = {}} = {}] = []} = results;
        if (!concepts.length) {
            throw new Error('Prediction Information Not Available.');
        }
        return concepts.map(c => new Concept(c.name, c.value));
    }

    static handleParseResults(results): Food {
        const {parsed = [], hints = []} = results;
        console.debug(parsed, hints);
        const matches = parsed.length ? parsed : hints.length ? hints : [];

        if (!matches.length) {
            throw new Error('Nutrition Information Not Available.');
        }

        const [{food: {foodId, label, measure, nutrients}}] = matches;
        console.debug(foodId, label, measure, nutrients);
        return new Food(label, nutrients);
    }

    public predict(imageData): Promise<Concept[]> {
        return this.clarifaiApp.models.predict(clarifaiOptions.model, imageData).then(ApiService.handlePredictResults);
    }

    public parse(ingredient: Concept): Promise<Food | null> {
        const url = 'https://api.edamam.com/api/food-database/parser?ingr='
            + ingredient.name
            + '&app_id=' + edamamOptions.app_id
            + '&app_key=' + edamamOptions.app_key;
        console.debug(url);
        return this.http.get<any>(url).toPromise().then(ApiService.handleParseResults);
    }
}

export class Concept {
    constructor(public name: string, public value: number) {
    }
}

interface NutritionCode {
    key: string;
    name: string;
    unit: string;
}

interface Nutrients {
    [key: string]: number;
}

interface Nutrient {
    name: string;
    value: number;
    unit: string;
}

export class Food {
    private static NutritionCodes: NutritionCode[] = [
        {key: 'CA', name: 'Calcium', unit: 'mg'},
        {key: 'ENERC_KCAL', name: 'Calories', unit: 'kcal'},
        {key: 'CHOCDF', name: 'Carbs', unit: 'g'},
        {key: 'NIA', name: 'Niacin (B3)', unit: 'mg'},
        {key: 'CHOLE', name: 'Cholesterol', unit: 'mg'},
        {key: 'P', name: 'Phosphorus', unit: 'mg'},
        {key: 'FAMS', name: 'Monounsaturated', unit: 'g'},
        {key: 'PROCNT', name: 'Protein', unit: 'g'},
        {key: 'FAPU', name: 'Polyunsaturated', unit: 'g'},
        {key: 'RIBF', name: 'Riboflavin (B2)', unit: 'mg'},
        {key: 'FASAT', name: 'Saturated', unit: 'g'},
        {key: 'SUGAR', name: 'Sugars', unit: 'g'},
        {key: 'FAT', name: 'Fat', unit: 'g'},
        {key: 'THIA', name: 'Thiamin (B1)', unit: 'mg'},
        {key: 'FATRN', name: 'Trans', unit: 'g'},
        {key: 'TOCPHA', name: 'Vitamin E', unit: 'mg'},
        {key: 'FE', name: 'Iron', unit: 'mg'},
        {key: 'VITA_RAE', name: 'Vitamin A', unit: 'æg'},
        {key: 'FIBTG', name: 'Fiber', unit: 'g'},
        {key: 'VITB12', name: 'Vitamin B12', unit: 'æg'},
        {key: 'FOLDFE', name: 'Folate (Equivalent)', unit: 'æg'},
        {key: 'VITB6A', name: 'Vitamin B6', unit: 'mg'},
        {key: 'K', name: 'Potassium', unit: 'mg'},
        {key: 'VITC', name: 'Vitamin C', unit: 'mg'},
        {key: 'MG', name: 'Magnesium', unit: 'mg'},
        {key: 'VITD', name: 'Vitamin D', unit: 'æg'},
        {key: 'NA', name: 'Sodium', unit: 'mg'},
        {key: 'VITK1', name: 'Vitamin K', unit: 'æg'}
    ];

    public nutrients: Nutrient[];

    constructor(public label: string, nutrients: Nutrients) {
        this.nutrients = [];
        for (const {key, name, unit} of Food.NutritionCodes) {
            const value = nutrients[key];
            if (value) {
                this.nutrients.push({name, value, unit});
            }
        }
    }


}

