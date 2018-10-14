import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ToastController} from '@ionic/angular';
import {ToastControllerMock} from 'ionic-mocks';
import {HomePage} from './home.page';
import {ApiService, Concept, Food} from './api.service';
import {Camera} from '@ionic-native/camera/ngx';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ApiServiceMock, CameraMock} from '../../mocks';


describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let api: ApiServiceMock;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {provide: ApiService, useClass: ApiServiceMock},
                {provide: Camera, useClass: CameraMock},
                {provide: ToastController, useFactory: () => ToastControllerMock.instance()}

            ],
            declarations: [HomePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        api = TestBed.get(ApiService);
        fixture.detectChanges();
    });

    describe('Take a Picture', () => {
        it('should get picture results', done => {
            api.data = [new Concept('pizza', 1.0)];
            component.takePicture().then(() => {
                expect(component.concepts[0].name).toEqual('pizza');
                done();
            });
        });

        it('should handle missing results', done => {
            api.data = null;
            component.takePicture().then(() => {
                expect(component.concepts).toBeNull();
                done();
            });
        });

        it('should handle errors', done => {
            api.error = new Error('Fail!');
            component.takePicture().then(() => {
                expect(component.concepts).toBeNull();
                done();
            });
        });
    });

    describe('Info', () => {
        it('should get nutrition info', done => {
            component.concepts = [new Concept('pizza', 1.0)];
            api.data = new Food('Cheese', {});
            component.getNutrients(0).then(() => {
                expect(component.currentIngredient).toBeTruthy();
                done();
            });
        });

        it('should handle missing nutrition info', done => {
            component.concepts = [new Concept('pizza', 1.0)];
            api.data = null;
            component.getNutrients(0).then(() => {
                expect(component.currentIngredient).toBeNull();
                done();
            });
        });

        it('should handle errors', done => {
            component.concepts = [new Concept('pizza', 1.0)];
            api.error = {};
            component.getNutrients(0).then(() => {
                expect(component.currentIngredient).toBeNull();
                done();
            });
        });

        it('should hide nutrition info', done => {
            component.hideFooter();
            expect(component.currentIngredient).toBeNull();
            done();
        });
    });
});
