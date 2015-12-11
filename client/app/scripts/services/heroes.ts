import{Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Hero} from '../models/hero';

@Injectable()
export class HeroService {

    private heroes:Hero[] = [
        new Hero(11, "Mr. Nicer Dicer", "Super"),
        new Hero(12, "Superman", "Mega"),
        new Hero(13, "Narco", "Dupa"),
        new Hero(14, "Ironman", "Electric")
    ];

    private delayedList:Promise<Array<Hero>>;

    constructor(private http:Http) {

    }

    getHeroes() {
        return this.heroes;
    }

    public getHeroesAsync:()=>Promise<Array<Hero>> = function () {
        return new Promise((resolve, reject) => {
            console.log('Timeout startet');
            setTimeout(()=>resolve(this.heroes), 2000);
        });
    }

    public getData() {

        return new Promise<Hero>((resolve, reject) => {
            this.http.get('api/data').subscribe(
                response => {
                    if (response.status === 200) {
                        resolve(response.json);
                    }
                    else {
                        reject(response);
                    }
                },
                err => console.log(err),
                ()=> console.log('Request complete'));
        });
    };

    public addHero(hero:Hero) {
        this.heroes.push(hero);
    }
}
