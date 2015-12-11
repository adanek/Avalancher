import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {HeroFormComponent} from "./components/hero-form.component";
import {Hero} from "./models/hero";
import {HeroService} from "./services/heroes";
import {SkiAreasComponent} from "./components/ski-areas.component";
import {AreaService} from "./services/area-service";

@Component({
    selector: 'my-app',
    templateUrl: "views/app.html",
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, HeroFormComponent, SkiAreasComponent]
})
export class AppComponent {
    public title:string;
    public selectedHero:Hero;
    public heroes:Hero[] = [];
    private Heroes:HeroService;
    private self = this;

    constructor(heroService:HeroService, private http:Http) {
        this.Heroes = heroService;
        this.title = "Tour of my Heroes";
        console.log("Getting heroes");
        heroService.getHeroesAsync()
            .then(receiveHeroes =>this.heroes = receiveHeroes)
            .catch(resp => console.log(resp));

        heroService.getData()
            .then(data => this.selectedHero = data)
            .catch(resp => console.log("Couldn't get data form server"));

        //this.http.get('api/data').subscribe(response => console.log(response));
    };

    public onSelect = function (hero:Hero) {
        if (this.selectedHero === hero) {
            this.selectedHero = undefined;
        } else {
            this.selectedHero = hero;
        }
    };

    public getSelectedClass(hero:Hero) {
        return {'selected': hero === this.selectedHero};
    };

    public addHero = function (newHero) {

        if (newHero.value) {
            var hero = {
                id: this.heroes.length,
                name: newHero.value
            };

            this.Heroes.addHero(hero);
            newHero.value = null;
        }
    };
}

bootstrap(AppComponent, [HTTP_PROVIDERS, HeroService, AreaService]);