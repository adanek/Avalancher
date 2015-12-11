import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {AreaService} from "../services/area-service";
import {SkiArea} from "../models/ski-area";

@Component({
    selector: 'ski-areas',
    templateUrl: 'views/ski-areas.component.html',
    directives: [CORE_DIRECTIVES]
})
export class SkiAreasComponent {

    public title: string = "Ski Area Component Binding"
    public areas: SkiArea[] = [];

    constructor(private areaService:AreaService){

        areaService.getAreas()
            .then(receivedAreas => {
                this.areas = receivedAreas;
                console.log('Areas received' + receivedAreas);
            })
            .catch(()=> console.log('Upps! Something went wrong.'));

    }
}