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
var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.demo = {
            assessment: "Die Lawinengefahr bleibt zumindest oberhalb etwa 2000m angespannt. Die Situation muss dort vielerorts (mit Ausnahme des südlichen Osttirols) mit einer kritischen Stufe 3 beurteilt werden. Besser ist es unterhalb der Waldgrenze, wo die Gefahr verbreitet mäßig ist. Allerdings Vorsicht: Auch in Steilhängen im lichten Waldgrenzbereich herrschen vielerorts noch ungünstige Verhältnisse. Wir haben derzeit 3 Probleme: Am kritischsten zu beurteilen ist ein Altschneeproblem oberhalb etwa 2000m (im Arlberggebiet oberhalb etwa 2200m), das v.a. im Sektor WNW über N bis ONO zu beachten ist. Oberhalb etwa 2800m haben wir ein ausgeprägtes Altschneeproblem auch in besonnten Hängen. Als Schwachschicht kommt zumindest eine bodennahe, lockere Schicht in Frage, die weiterhin sehr leicht gestört werden kann. Dies ist weiterhin auch in flacherem Gelände möglich, was im Hangfußbereich von Schattenhängen zu beachten ist. Als zweites Problem gibt es ein Triebschneeproblem. Hier ist insbesondere auf jene Triebschneepakete zu achten, die seit Sonntag entstanden sind. Am störanfälligsten sind jene, die heute im Tagesverlauf mit zunehmendem Wind entstehen werden. Hier heißt es in allen Expositionen oberhalb der Waldgrenze darauf zu achten! Zusätzlich beobachtet man im schneereichen Westen des Landes ein Gleitschneeproblem. Auf steilen Wiesenhängen bilden sich mitunter Risse. Wir raten, sich nicht unterhalb solcher Bereiche aufzuhalten, da der Abgangszeitpunkt nicht vorhersehbar ist.",
            snowStructure: "Die Schneedecke bleibt zumindest oberhalb der Waldgrenze zum Teil sehr störanfällig. Dies trifft insbesondere für Höhenlagen oberhalb etwa 2000m für den Sektor WNW über N bis ONO zu, wo bodennahe kantige Schichten bzw. Schwimmschnee als Gleitfläche für Schneebrettlawinen vorhanden ist. Die meisten der unlängst beobachteten Lawinenabgänge sind auf dieser Schwachschicht abgegangen. Als zusätzliche Schwachschicht kommt der lockere, kalte Pulverschnee in Frage, der derzeit v.a. im Kammbereich, im Tagesverlauf dann verbreiterter von frischem Triebschnee überlagert wird.",
            creationDate: "2016-01-19T07:30:00+01:00",
            author: "Patrick Nairz",
            forecast: "Bergwetter heute: Wolkenaufzug verdrängt heute tagsüber die Sonne. Am Vormittag sind die Sichten trotz hoher Wolken noch recht passabel. Tagsüber verdichten sich die Wolken im Norden und Westen und die Sichten werden diffus, dann fällt entlang der Nordalpen Nebel mit geringem Schneefall ein. Am meisten Sonne in den Dolomiten und Karnischen Alpen. Kommende Nacht im Norden leichter Schneefall und 5 bis 10 cm Neuschnee, am meisten rund um den Arlberg. Temperatur in 2000m: -9 Grad, in 3000m: -15 Grad. Mäßiger bis starker Höhenwind aus West bis Nordwest",
            risk: 3,
            summary: "Weiterhin hohe Störanfälligkeit der Schneedecke v.a. in Schattenhängen oberhalb etwa 2000m!",
            info: "Neben der hohen Störanfälligkeit in Schattenhängen ist zunehmend auf frischen Triebschnee zu achten!"
        };
        this.getReport = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.get('/api/riskreport').subscribe(function (response) {
                    if (response.status === 200) {
                        resolve(response.json());
                    }
                    else if (response.status === 404) {
                        console.info('AreaService: Fail to load data form server. Serving demo data');
                        resolve(_this.demo);
                    }
                    else {
                        reject(response);
                    }
                }, function (err) { return reject('Report data not available'); });
            });
        };
    }
    ReportService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReportService);
    return ReportService;
})();
exports.ReportService = ReportService;
//# sourceMappingURL=report-service.js.map