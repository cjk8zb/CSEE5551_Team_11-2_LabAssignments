import {ApiService, Concept} from './api.service';
import {HttpClient} from '@angular/common/http';
import {defer} from 'rxjs';

function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

describe('ApiService', () => {
    let service: ApiService;
    // let httpClient: HttpClient;
    // let httpTestingController: HttpTestingController;
    let httpClientSpy: { get: jasmine.Spy };
    let modelsSpy: { predict: jasmine.Spy };

    beforeEach(async () => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        modelsSpy = jasmine.createSpyObj('models', ['predict']);
        service = new ApiService(<any> httpClientSpy);
        service.clarifaiApp = {
            models: modelsSpy
        };
    });

    it('should handle parsed', done => {

        httpClientSpy.get.and.returnValue(asyncData({parsed: [{food: {label: '', nutrients: {}}}]}));

        service.parse(new Concept('pizza', 1.0)).then(data => {
            console.debug('data', data);
            done();
        });

    });

    it('should handle hints', done => {

        httpClientSpy.get.and.returnValue(asyncData({hints: [{food: {label: '', nutrients: {CA: 123}}}]}));

        service.parse(new Concept('pizza', 1.0)).then(data => {
            console.debug('data', data);
            done();
        });

    });

    it('should handle missing', done => {

        httpClientSpy.get.and.returnValue(asyncData({}));

        service.parse(new Concept('pizza', 1.0)).catch(error => {
            console.error('error', error);
            done();
        });

    });

    it('should handle image', done => {
        modelsSpy.predict.and.returnValue(Promise.resolve({outputs: [{data: {concepts: ['a']}}]}));
        const promise = service.predict({imageData: ''}).then(data => {
            console.debug('data', data);
            done();
        });
    });

    it('should handle image errors', done => {
        modelsSpy.predict.and.returnValue(Promise.reject('Oops'));
        const promise = service.predict({imageData: ''}).then(data => {
            console.debug('data', data);
            expect(data).toBeNull();
            done();
        }).catch(error => {
            console.debug('error', error);
            done();
        });
    });
    it('should handle missing image errors', done => {
        modelsSpy.predict.and.returnValue(Promise.resolve({}));
        const promise = service.predict({imageData: ''}).then(data => {
            console.debug('data', data);
            expect(data).toBeNull();
            done();
        }).catch(error => {
            console.debug('error', error);
            done();
        });
    });
});
