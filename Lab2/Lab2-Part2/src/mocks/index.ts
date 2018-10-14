import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ApiService} from '../app/home/api.service';

export class CameraMock extends Camera {
    getPicture(options?: CameraOptions): Promise<any> {
        return Promise.resolve(
            '/9j/4AAQSkZJRgABAQAASABIAAD/2wBDABwcHBwcHDAcHDBEMDAwRFxEREREXHRcXFxcXHSMdHR0' +
            'dHR0jIyMjIyMjIyoqKioqKjExMTExNzc3Nzc3Nzc3Nz/2wBDASIkJDg0OGA0NGDmnICc5ubm5ubm' +
            '5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ub/wAARCABVAIADASIA' +
            'AhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAgUBBv/EAC0QAAICAQMDBAIBAwUAAAAAAAEC' +
            'AAMREiExBEFREyJhgTJxoRSRsSNC0eHx/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAeEQAC' +
            'AgIDAQEAAAAAAAAAAAAAAQIRIUESMVEDYf/aAAwDAQACEQMRAD8AzhrJ0lc58TV6foET33bnx2EN' +
            '0vTildTfmf4jFhIU45xAl6M5eFsjOAZNS5xkZE8+UdBqbIJ4/wC4EknYbkmDkJZvWdVRUcMcn43j' +
            'GRPO1B2cqia2G/0JsP1HpsFK4JAO/wAzcvQrI1qgn6hE25PxAA22IfcN/AgPTPB2EWU/B1FbHlv1' +
            'HBGJcOCMmJAajp8byKz5woEVfR7C4eD2x4nDEw9wbcbfEL6+nZhH5oXiwpgLqK7tzs3n/mES0WHS' +
            'BLGMmmDKMG2p630uN/M7pAOQZs2Vrauhvo+JkODW5RxgiK0MnZ6CCssWpC7f28wsw+ssY3e47DgR' +
            '26Jlb+oa45AwvYQG7bcfUoWA3PeMitq09TJB7SN+mSbO0W2r70JAOxxGXKkbnJ4+YvWAVHBxnPzm' +
            'PKqEZQZzvCslapI4t6ZFancrkQxUuue0CKVSz1cYwMD7hHKhcMMht4aMXUrnftttBujjUyfxLroZ' +
            'CK9u36kUFV0t7m/zNRroSse+o4xqGORvJR1SXHB2/cd/FSxMz61V21gD9yTSKLI7UVqYgcGNGIZz' +
            'sO0ZpfUNJ7SsJXglNFzFuqq9SvWv5J/I7xozgODmUECmYPWIy2lhxN6ZeFdnRudxEm6QYqzJZQSC' +
            'PIzNHqSPTUE43GYo1RqcDmOutVhw5H6Mk9FIxpAQlakGs88n4ji3BfaCMcRZFCXgJxjeG11N7SNJ' +
            '7ZEFsagnqlh7CCfmVd/9MGzBHcgxOwKLFbGOc4hq9LjWp3zx2jI1DCE17P8A7hDhhlRkxS1masjA' +
            'cziZ/IMNRGB4EMnjAEi3VOzAaDsM/c6mKqxn4lxQNBGxB3+4u2tvYxxjcyfYyGz6dja878TmDW4Y' +
            'bjzMxta/jyTyI1U9oQMT3xGVoDiaZlJfsJQzoIB8TOuCi/jBxzNLMVvTUNQ5EWatDReTK6lmyHxk' +
            'rIWrFXquRqYZxCsFsTzF7OlIUsMDb7kE1ssyvRJktaxwo5heouDEFeIAhSoXGx3PiWOm0j55jbs1' +
            'DT0oyD0yAe0W0sqkOuRuMjj7lWrsDAZIUb5hU6nHstPG/HMKMzlZFq6SAfkzgSytyNOAO4MMLAD7' +
            'RtiA9RncEn+0Ubocq6nSpBzjkQpsqY6n7D7mSNQs9247Q9jHUueG7zUD9DLTVr9RWJU9jGCM6V4g' +
            'F0qAp/8AYfplLNqbtDFWxZjx2GIMy5lJcgHlSMzs5CYTasixnC/Q/wAxO17mOgATYO/HMS6hMEWA' +
            'YI5+RIyhspGWjLdrKd8YxD9JZVuLQNROxh2rFqhG775iNlBqcpyIqyh2aViVOOIp6YJyASPEvoBr' +
            '1LyviCNjVsApyO48xEOih0ldSk4PP6kBDNnHHE62AATsfmdLV7lvHIjmDK+n3adolZbZY2bF0jsO' +
            '0KpLle4HE1CNeFQQxiJN1kUrR305mmiitdIkSsVjyZCZWMaJSlZwyDAy7cLuZACTgRTqrQT/AE6d' +
            't2Pz4mboCVl+iva6r38jbMdkkjAJOkAjB3kkmMAalUGV7Sj1JcPcN/MkkRJJjWJBPRswD8H5zHvS' +
            'rZcFRJJEj2x5dI49NTDDKDmAPTVYwBtJJHpCJsNR0tSjKjEbwFGBtJJGSA3ZQyhkkhAD6mxqKdSf' +
            'k22fEyk3Y57SSScikT//2Q==');
    }
}


export class ApiServiceMock extends ApiService {
    error?: any = null;
    data: any = {};

    public predict(imageData, model?): Promise<any> {
        if (this.error) {
            return Promise.reject(this.error);
        }
        return Promise.resolve(this.data);
    }

    public parse(ingredient): Promise<any> {
        if (this.error) {
            return Promise.reject(this.error);
        }
        return Promise.resolve(this.data);
    }

}
