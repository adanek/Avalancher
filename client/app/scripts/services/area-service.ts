import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {SkiArea} from '../models/ski-area';

@Injectable()
export class AreaService {

    private demoAreas: Array<SkiArea> = [
        { name: "Kühtai", city: "Kühtai", avalancheRisk: "high"},
        { name: "Glungezer", city: "Vill", avalancheRisk: "high"}
    ];

    constructor(private http:Http){

    }

    public getAreas:()=>Promise<Array<SkiArea>> = function () {
        return new Promise((resolve, reject) => {

            this.http.get('/api/areas').subscribe(
                response => {
                    if (response.status === 200) {
                        resolve(response.json);
                    }
                    else if (response.status === 404){
                        resolve(this.demoAreas);
                    }
                    else {
                        reject(response);
                    }
                },
                err => reject('Data not available'),
                ()=> console.log('Area request complete'));
        });
    }
}