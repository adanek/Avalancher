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
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var ski_areas_component_1 = require("./components/ski-areas.component");
var area_service_1 = require("./services/area-service");
var start_component_1 = require("./components/start.component");
var hotel_component_1 = require("./components/hotel.component");
var hotel_service_1 = require("./services/hotel-service");
var report_component_1 = require("./components/report-component");
var report_service_1 = require("./services/report-service");
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Welcome to Avalauncher";
    }
    ;
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'avalauncher-app',
            templateUrl: "views/app.html",
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            { path: '/', component: ski_areas_component_1.SkiAreasComponent, as: 'Home' },
            { path: '/areas', component: ski_areas_component_1.SkiAreasComponent, as: 'Areas' },
            { path: '/areas/:area/hotels', component: hotel_component_1.HotelComponent, as: 'Hotels' },
            { path: '/start/:area', component: start_component_1.StartComponent, as: 'Start' },
            { path: '/report', component: report_component_1.ReportComponent, as: 'Report' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
angular2_1.bootstrap(AppComponent, [
    router_1.ROUTER_PROVIDERS,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy),
    http_1.HTTP_PROVIDERS,
    area_service_1.AreaService,
    hotel_service_1.HotelService,
    report_service_1.ReportService
]);
//# sourceMappingURL=app.js.map