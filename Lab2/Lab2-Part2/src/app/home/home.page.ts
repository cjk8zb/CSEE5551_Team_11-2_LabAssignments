import {Component} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ApiService, Concept, Food} from './api.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    imageUrl?: string;
    concepts: Concept[];
    currentIngredient?: Food;

    constructor(public toastController: ToastController,
                public camera: Camera,
                public api: ApiService) {
    }

    async takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        const imageData = await this.camera.getPicture(options);
        this.imageUrl = 'data:image/jpeg;base64,' + imageData;

        try {
            this.concepts = await this.api.predict({base64: imageData});
            console.debug(this.concepts);
        } catch (error) {
            this.concepts = null;
            this.handleError(error);
        }
    }

    async getNutrients(index: number) {
        const concept = this.concepts[index];
        try {
            this.currentIngredient = await this.api.parse(concept);
        } catch (error) {
            this.currentIngredient = null;
            this.handleError(error);
        }
    }

    async handleError(error: Error) {
        console.error(error);
        const toast = await this.toastController.create({
            message: error && error.message || 'Unknown Error.',
            duration: 2000
        });
        toast.present();
    }

    hideFooter() {
        this.currentIngredient = null;
    }
}
