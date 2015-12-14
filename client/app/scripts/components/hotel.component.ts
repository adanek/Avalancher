import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {HotelService} from "../services/hotel-service";
import {Hotel} from "../models/hotel";

@Component({
    selector: 'hotels',
    templateUrl: 'views/hotel.component.html',
    directives: [CORE_DIRECTIVES]
})
export class HotelComponent{


    public hotels: Hotel[];

    public area: string;
    constructor(private params:RouteParams, private hotelService: HotelService){
        this.area= params.get('area');

        hotelService.getHotelsFormArea(this.area).then(receivedHotels => this.hotels = receivedHotels);
    }

    public getImageSrc(hotel:Hotel){
        return hotel.image === "null" ? 'images/no_image.png' : hotel.image;
    }

}