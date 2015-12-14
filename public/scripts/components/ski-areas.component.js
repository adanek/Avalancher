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
var router_1 = require('angular2/router');
var area_service_1 = require("../services/area-service");
var SkiAreasComponent = (function () {
    function SkiAreasComponent(areaService, location) {
        var _this = this;
        this.areaService = areaService;
        this.location = location;
        this.title = "Ski Area Component Binding";
        this.areas = [];
        areaService.getAreas()
            .then(function (receivedAreas) { return _this.areas = receivedAreas; })
            .catch(function () { return console.log('Upps! Something went wrong.'); });
    }
    /**
     * Returns the appropritae icon for the given avalanche risk
     * @param risk : string the risk you want the icon for
     * @return the relative uri of the icon
     */
    SkiAreasComponent.prototype.getAvalancheRiskIcon = function (risk) {
        var base = 'images/';
        var src = base;
        switch (risk) {
            case 'I - gering Lawinenwarndienst':
                src = src + '1_standard.jpg';
                break;
            case 'II - mäßig Lawinenwarndienst':
                src = src + '2_standard.jpg';
                break;
            case 'III - hoch Lawinenwarndienst':
                src = src + '3_standard.jpg';
                break;
            case 'IV - Lawinenwarndienst':
            case 'V - Lawinenwarndienst':
                src = src + '4_5_standard.jpg';
                break;
            case 'keine Meldung Lawinenwarndienst':
            default:
                src = src + 'no_rating_standard.jpg';
        }
        return src;
    };
    SkiAreasComponent.prototype.gotoHotels = function (area) {
        this.location.go('/start');
    };
    SkiAreasComponent.prototype.getHotelsLink = function (area) {
        return '#/areas/' + area.name + '/hotels';
    };
    SkiAreasComponent = __decorate([
        angular2_1.Component({
            selector: 'ski-areas',
            templateUrl: 'views/ski-areas.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [area_service_1.AreaService, router_1.Location])
    ], SkiAreasComponent);
    return SkiAreasComponent;
})();
exports.SkiAreasComponent = SkiAreasComponent;
//# sourceMappingURL=ski-areas.component.js.map