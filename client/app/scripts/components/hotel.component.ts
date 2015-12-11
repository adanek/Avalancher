import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'hotels',
    templateUrl: '/app/views/hotel.component.html',
    directives: []
})
export class HotelComponent{

    public area: string;
    constructor(private params:RouteParams){
        this.area= params.get('area');
    }

}