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
var AreaService = (function () {
    function AreaService(http) {
        this.http = http;
        this.demoAreas = [
            {
                "name": "Kitzbühel-Kirchberg",
                "city": "Kitzbühel",
                "avalancherisk": "I - gering Lawinenwarndienst",
                "snowheight": 44,
                "freshSnowHeight": 0,
                "openLiftCount": 20,
                "liftCount": 58
            }, {
                "name": "Glungezer",
                "city": "Tulfes",
                "avalancherisk": "keine Meldung Lawinenwarndienst",
                "snowheight": 15,
                "freshSnowHeight": 0,
                "openLiftCount": 0,
                "liftCount": 0
            }, {
                "name": "Pitztaler Gletscher",
                "city": "Pitztal",
                "avalancherisk": "keine Meldung Lawinenwarndienst",
                "snowheight": 128,
                "freshSnowHeight": 0,
                "openLiftCount": 6,
                "liftCount": 6
            }, {
                "name": "Innsbruck Nordkette",
                "city": "Innsbruck",
                "avalancherisk": "keine Meldung Lawinenwarndienst",
                "snowheight": 10,
                "freshSnowHeight": 0,
                "openLiftCount": 0,
                "liftCount": 2
            }, {
                "name": "Innsbruck-Igls Patscherkofel",
                "city": "Innsbruck Igls",
                "avalancherisk": "keine Meldung Lawinenwarndienst",
                "snowheight": 0,
                "freshSnowHeight": 0,
                "openLiftCount": 0,
                "liftCount": 0
            }, {
                "name": "Kühtai",
                "city": "Kühtai",
                "avalancherisk": "II - mäßig Lawinenwarndienst",
                "snowheight": 15,
                "freshSnowHeight": 0,
                "openLiftCount": 5,
                "liftCount": 12
            }
        ];
        this.getAreas = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.get('/api/areas').subscribe(function (response) {
                    if (response.status === 200) {
                        resolve(response.json());
                    }
                    else if (response.status === 404) {
                        console.info('AreaService: Fail to load data form server. Serving demo data');
                        resolve(_this.demoAreas);
                    }
                    else {
                        reject(response);
                    }
                }, function (err) { return reject('Data not available'); });
            });
        };
    }
    AreaService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AreaService);
    return AreaService;
})();
exports.AreaService = AreaService;
//# sourceMappingURL=area-service.js.map