var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var hero_1 = require('../models/hero');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroes = [
            new hero_1.Hero(11, "Mr. Nicer Dicer", "Super"),
            new hero_1.Hero(12, "Superman", "Mega"),
            new hero_1.Hero(13, "Narco", "Dupa"),
            new hero_1.Hero(14, "Ironman", "Electric")
        ];
        this.getHeroesAsync = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                console.log('Timeout startet');
                setTimeout(function () { return resolve(_this.heroes); }, 2000);
            });
        };
    }
    HeroService.prototype.getHeroes = function () {
        return this.heroes;
    };
    HeroService.prototype.getData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/data').subscribe(function (response) {
                if (response.status === 200) {
                    resolve(response.json);
                }
                else {
                    reject(response);
                }
            }, function (err) { return console.log(err); }, function () { return console.log('Request complete'); });
        });
    };
    ;
    HeroService.prototype.addHero = function (hero) {
        this.heroes.push(hero);
    };
    HeroService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=heroes.js.map