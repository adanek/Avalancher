import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {SkiArea} from '../models/ski-area';

@Injectable()
export class AreaService {

    private demoAreas:Array<SkiArea> = [
        {
            "name": "Kitzbühel-Kirchberg",
            "city": "Kitzbühel",
            "avalancherisk": "I - gering Lawinenwarndienst",
            "snowheight": 44,
            "openLiftCount": 20,
            "liftCount": 58
        }, {
            "name": "Innsbruck-Igls Patscherkofel",
            "city": "Innsbruck Igls",
            "avalancherisk": "keine Meldung Lawinenwarndienst",
            "snowheight": 0,
            "openLiftCount": 0,
            "liftCount": 0
        }, {
            "name": "Glungezer",
            "city": "Tulfes",
            "avalancherisk": "keine Meldung Lawinenwarndienst",
            "snowheight": 15,
            "openLiftCount": 0,
            "liftCount": 0
        }, {
            "name": "Pitztaler Gletscher",
            "city": "Pitztal",
            "avalancherisk": "IV - groß Lawinenwarndienst",
            "snowheight": 128,
            "openLiftCount": 6,
            "liftCount": 6
        }, {
            "name": "Innsbruck Nordkette",
            "city": "Innsbruck",
            "avalancherisk": "III - erheblich Lawinenwarndienst",
            "snowheight": 10,
            "openLiftCount": 0,
            "liftCount": 2
        }, {
            "name": "Kühtai",
            "city": "Kühtai",
            "avalancherisk": "II - mäßig Lawinenwarndienst",
            "snowheight": 15,
            "openLiftCount": 5,
            "liftCount": 12
        }
    ];

    constructor(private http:Http) {

    }

    public getAreas:()=>Promise<Array<SkiArea>> = function () {
        return new Promise((resolve, reject) => {

            this.http.get('/api/areas').subscribe(
                response => {
                    if (response.status === 200) {
                        resolve(response.json());
                    }
                    else if (response.status === 404) {
                        console.info('AreaService: Fail to load data form server. Serving demo data');
                        resolve(this.demoAreas);
                        //reject("No data");
                    }
                    else {
                        reject(response);
                    }
                },
                err => reject('Data not available')
            );
        });
    }
}