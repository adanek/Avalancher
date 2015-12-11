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
var hero_1 = require('../models/hero');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroes = [
            new hero_1.Hero(11, "Mr. Nice", "Super"),
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