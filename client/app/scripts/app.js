var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var hero_form_component_1 = require("./components/hero-form.component");
var heroes_1 = require("./services/heroes");
var ski_areas_component_1 = require("./components/ski-areas.component");
var area_service_1 = require("./services/area-service");
var AppComponent = (function () {
    function AppComponent(heroService, http) {
        var _this = this;
        this.http = http;
        this.heroes = [];
        this.self = this;
        this.onSelect = function (hero) {
            if (this.selectedHero === hero) {
                this.selectedHero = undefined;
            }
            else {
                this.selectedHero = hero;
            }
        };
        this.addHero = function (newHero) {
            if (newHero.value) {
                var hero = {
                    id: this.heroes.length,
                    name: newHero.value
                };
                this.Heroes.addHero(hero);
                newHero.value = null;
            }
        };
        this.Heroes = heroService;
        this.title = "Tour of my Heroes";
        console.log("Getting heroes");
        heroService.getHeroesAsync()
            .then(function (receiveHeroes) { return _this.heroes = receiveHeroes; })
            .catch(function (resp) { return console.log(resp); });
        heroService.getData()
            .then(function (data) { return _this.selectedHero = data; })
            .catch(function (resp) { return console.log("Couldn't get data form server"); });
        //this.http.get('api/data').subscribe(response => console.log(response));
    }
    ;
    AppComponent.prototype.getSelectedClass = function (hero) {
        return { 'selected': hero === this.selectedHero };
    };
    ;
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: "views/app.html",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, hero_form_component_1.HeroFormComponent, ski_areas_component_1.SkiAreasComponent]
        }), 
        __metadata('design:paramtypes', [heroes_1.HeroService, http_1.Http])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, heroes_1.HeroService, area_service_1.AreaService]);
//# sourceMappingURL=app.js.map