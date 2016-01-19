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
var hotel_service_1 = require("../services/hotel-service");
var HotelComponent = (function () {
    function HotelComponent(params, hotelService) {
        var _this = this;
        this.params = params;
        this.hotelService = hotelService;
        this.area = params.get('area');
        hotelService.getHotelsFormArea(this.area).then(function (receivedHotels) { return _this.hotels = receivedHotels; });
    }
    HotelComponent.prototype.getImageSrc = function (hotel) {
        return hotel.image === null ? 'images/no_image.png' : hotel.image;
    };
    HotelComponent = __decorate([
        angular2_1.Component({
            selector: 'hotels',
            templateUrl: 'views/hotel.component.html',
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams, hotel_service_1.HotelService])
    ], HotelComponent);
    return HotelComponent;
})();
exports.HotelComponent = HotelComponent;
//# sourceMappingURL=hotel.component.js.map