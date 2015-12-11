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
var HotelService = (function () {
    function HotelService(http) {
        this.http = http;
        this.demoData = [
            {
                "name": "Grand Hotel Europa",
                "stars": "5-Sterne-Hotel",
                "location": "Innenstadt, Innsbruck",
                "rating": "8,5",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/grandhoteleuropa.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X1;highlight_room=",
                "image": "http://q-ec.bstatic.com/images/hotel/square200/711/7119023.jpg",
                "description": "Die Rolling Stones, Sting, Königin Elizabeth II. und der Prinz von Monaco waren bereits im Grand Hotel Europa in Innsbruck zu Gast. Alle Zimmer zeichnen sich durch eine moderne Einrichtung aus."
            }, {
                "name": "Hotel Sailer",
                "stars": "4-Sterne-Hotel",
                "location": "Innenstadt, Innsbruck",
                "rating": "8,2",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/sailer.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X2;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/139/13930109.jpg",
                "description": "Das Hotel Sailer liegt einen 2-minütigen Spaziergang vom Hauptbahnhof Innsbruck und einen 10-minütigen Spaziergang von der Altstadt entfernt."
            }, {
                "name": "Hotel Grauer Bär",
                "stars": "4-Sterne-Hotel",
                "location": "Innenstadt, Innsbruck",
                "rating": "8,4",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/htelgrauerbaerinnsbr.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X3;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/880/8800186.jpg",
                "description": "Im Herzen von Innsbruck begrüßt Sie das Hotel Grauer Bär, nur 2 Gehminuten von der historischen Altstadt entfernt."
            }, {
                "name": "Hilton Innsbruck",
                "stars": "4-Sterne-Hotel",
                "location": "Innsbruck",
                "rating": "8,1",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/hilton-innsbruck.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X4;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/140/14054064.jpg",
                "description": "Nur 5 Gehminuten von der Altstadt entfernt begrüßt Sie das Hilton Innsbruck mit Panoramablick auf die Tiroler Alpen, einem Steak-Restaurant und einem Wellnessbereich."
            }, {
                "name": "Hotel Maximilian - Stadthaus Penz",
                "stars": "4-Sterne-Hotel",
                "location": "Innenstadt, Innsbruck",
                "rating": "9,1",
                "ratingDescription": "Hervorragend",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/maximilian-innsbruck.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X5;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/396/39613345.jpg",
                "description": "Das Hotel Maximilian begrüßt Sie im Herzen der Innsbrucker Altstadt direkt neben einer Fußgängerzone und 3 Gehminuten vom Goldenen Dachl entfernt mit kostenlosem WLAN sowie Zimmern mit einem..."
            }, {
                "name": "Austria Trend Hotel Congress Innsbruck",
                "stars": "4-Sterne-Hotel",
                "location": "Innsbruck",
                "rating": "8,7",
                "ratingDescription": "Fabelhaft",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/austria-trend-congress-innsbruck.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X6;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/521/52138937.jpg",
                "description": "Das Austria Trend Hotel Congress in der Nähe des Kongress- und Ausstellungszentrums von Innsbruck liegt gegenüber der neuen Hungerburgbahn (Seilbahn) und nur wenige Schritte vom historischen..."
            }, {
                "name": "Ramada Innsbruck Tivoli",
                "stars": "3-Sterne-Hotel",
                "location": "Pradl, Innsbruck",
                "rating": "8,3",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/ramada-innsbruck-tivoli.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X7;highlight_room=",
                "image": "http://q-ec.bstatic.com/images/hotel/square200/709/7091745.jpg",
                "description": "Dieses 3-Sterne-Superior-Hotel begrüßt Sie in einem modernen 12-stöckigen Gebäude direkt gegenüber dem Sportkomplex Olympiaworld."
            }, {
                "name": "Hotel Penz West",
                "stars": "4-Sterne-Hotel",
                "location": "Innsbruck",
                "rating": "8,5",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/sporthotelpenztirol.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X8;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/149/14963739.jpg",
                "description": "Dieses moderne und elegante 4-Sterne-Hotel ist nur 4 km vom Stadtzentrum entfernt und befindet sich direkt neben dem Flughafen Innsbruck und der Autobahn A12."
            }, {
                "name": "Hotel Innsbruck",
                "stars": "4-Sterne-Hotel",
                "location": "Innenstadt, Innsbruck",
                "rating": "9,0",
                "ratingDescription": "Hervorragend",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/hotelinnsbruck.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X9;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/563/56316120.jpg",
                "description": "Das Hotel Innsbruck begrüßt Sie am Flussufer des Inn im Herzen der Altstadt und nur 5 Gehminuten vom Kongresszentrum und der Seilbahn Hungerburgbahn entfernt."
            }, {
                "name": "Nala Individuellhotel",
                "stars": null,
                "location": "Innsbruck",
                "rating": "9,2",
                "ratingDescription": "Hervorragend",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/nala.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X10;highlight_room=",
                "image": "http://q-ec.bstatic.com/images/hotel/square200/512/51206641.jpg",
                "description": "Das Nala Individuellhotel wurde im September 2014 eröffnet und genießt eine ruhige Lage im Zentrum von Innsbruck, 800 m vom Goldenen Dachl entfernt."
            }, {
                "name": "Hotel Central",
                "stars": "4-Sterne-Hotel",
                "location": "Innenstadt, Innsbruck",
                "rating": "8,1",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/hote-central.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X11;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/411/41103493.jpg",
                "description": "Dieses 4-Sterne-Hotel befindet sich im Zentrum von Innsbruck, direkt gegenüber dem Kaufhaus Tyrol."
            }, {
                "name": "Hotel Engl",
                "stars": "3-Sterne-Hotel",
                "location": "Innsbruck",
                "rating": "8,0",
                "ratingDescription": "Sehr gut",
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/engl.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X12;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/247/2473786.jpg",
                "description": "Das Hotel Engl liegt im ruhigen Stadtteil St. Nikolaus, nur 5 Gehminuten von der Innsbrucker Altstadt und dem Goldenen Dachl entfernt."
            }, {
                "name": "Hotel Altpradl",
                "stars": "3-Sterne-Hotel",
                "location": "Pradl, Innsbruck",
                "rating": "7,2",
                "ratingDescription": null,
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/altpradl.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X13;highlight_room=",
                "image": "http://r-ec.bstatic.com/images/hotel/square200/168/16815635.jpg",
                "description": "Nur einen 15-minütigen Spaziergang von der Innsbrucker Altstadt und dem Hauptbahnhof entfernt begrüßt Sie das Hotel Altpradl mit kostenfreiem WLAN und kostenfreien Privatparkplätzen."
            }, {
                "name": "Hotel Goldene Krone Innsbruck",
                "stars": "3-Sterne-Hotel",
                "location": "Innenstadt, Innsbruck",
                "rating": "7,5",
                "ratingDescription": null,
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/goldene.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X14;highlight_room=",
                "image": "http://q-ec.bstatic.com/images/hotel/square200/889/8892744.jpg",
                "description": "Das familiengeführte 3-Sterne-Hotel Goldene Krone bietet Ihnen Aussicht auf den Triumphbogen und die Skisprungschanze Bergisel."
            }, {
                "name": "Hotel Tautermann",
                "stars": "3-Sterne-Hotel",
                "location": "Innsbruck",
                "rating": "7,4",
                "ratingDescription": null,
                "price": "$$$$$",
                "url": "http://www.booking.com//hotel/at/hoteltautermann.de.html?label=gen173nr-15CAEoggJCAlhYSDNiBW5vcmVmaA6IAQGYAQe4AQTIAQTYAQPoAQE;sid=5d6d791d0a50fb103436f71c728c9216;dcid=1;ucfs=1;room1=A,A;srfid=ed7db36c1c118bbf9dc67cbb056ce869d2c47494X15;highlight_room=",
                "image": "http://q-ec.bstatic.com/images/hotel/square200/541/54166114.jpg",
                "description": "Das familiengeführte \"Hotel Tautermann\" befindet sich in einer ruhigen Seitenstraße von Innsbruck und bietet wunderbaren Blick auf die Berge."
            }
        ];
        /**
         * Get the hotel data for the giben area form the server,
         * or serve the demodata if the server is not available
         * @param area string the name of the area
         * @returns {Promise<Array<Hotel>>} list of hotels in the given area
         */
        this.getHotelsFormArea = function (area) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.http.get('api/hotels/' + area).subscribe(function (response) {
                    if (response.status === 200) {
                        resolve(response.json());
                    }
                    else if (response.status === 404) {
                        console.info("HotelService: Couldn't reach server, serve demoData");
                        resolve(_this.demoData);
                    }
                    else {
                        console.error(response);
                    }
                }, function () {
                    console.error('Fail sending hotel request');
                    reject();
                });
            });
        };
    }
    HotelService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HotelService);
    return HotelService;
})();
exports.HotelService = HotelService;
//# sourceMappingURL=hotel-service.js.map