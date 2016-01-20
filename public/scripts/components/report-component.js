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
var report_service_1 = require("../services/report-service");
var ReportComponent = (function () {
    function ReportComponent(reportService, location) {
        var _this = this;
        this.reportService = reportService;
        this.location = location;
        this.title = "Aktuelle Lawinenlage";
        this.reportDate = new Date();
        this.report = {
            risk: 0,
            creationDate: '',
            author: '',
            assessment: '',
            snowStructure: '',
            forecast: '',
            summary: '',
            info: ''
        };
        reportService.getReport()
            .then(function (data) {
            _this.report = data;
            _this.reportDate = new Date(data.creationDate);
        })
            .catch(function () { return console.error("Couldn't receive avalanche report"); });
    }
    /**
     * Returns the appropritae icon for the given avalanche risk
     * @param risk : string the risk you want the icon for
     * @return the relative uri of the icon
     */
    ReportComponent.prototype.getAvalancheRiskIcon = function (risk) {
        var base = 'images/';
        var src = base;
        switch (risk) {
            case 1:
                src = src + '1_standard.jpg';
                break;
            case 2:
                src = src + '2_standard.jpg';
                break;
            case 3:
                src = src + '3_standard.jpg';
                break;
            case 4:
            case 5:
                src = src + '4_5_standard.jpg';
                break;
            default:
                src = src + 'no_rating_standard.jpg';
        }
        return src;
    };
    ReportComponent = __decorate([
        angular2_1.Component({
            selector: 'risk-report',
            templateUrl: 'views/report-component.html',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [report_service_1.ReportService, router_1.Location])
    ], ReportComponent);
    return ReportComponent;
})();
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report-component.js.map