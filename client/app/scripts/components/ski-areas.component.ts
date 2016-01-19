import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Location, RouterLink} from 'angular2/router';
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

    constructor(private areaService:AreaService, private location:Location){

        areaService.getAreas()
            .then(receivedAreas => this.areas = receivedAreas)
            .catch(()=> console.log('Upps! Something went wrong.'));

    }

    /**
     * Returns the appropritae icon for the given avalanche risk
     * @param risk : string the risk you want the icon for
     * @return the relative uri of the icon
     */
    public getAvalancheRiskIcon(risk: string){

        var base = 'images/';
        var src = base;
        switch(risk){
            case 'I - gering Lawinenwarndienst':
                src = src + '1_standard.jpg';
                break;
            case 'II - mäßig Lawinenwarndienst':
                src= src + '2_standard.jpg';
                break;
            case 'III - erheblich Lawinenwarndienst':
                src = src + '3_standard.jpg';
                break;
            case 'IV - groß Lawinenwarndienst':
            case 'V - sehr groß Lawinenwarndienst':
                src = src + '4_5_standard.jpg';
                break;

            case 'keine Meldung Lawinenwarndienst':
            default:
                src = src + 'no_rating_standard.jpg';
        }

        return src;
    }

    public gotoHotels(area:SkiArea){
        this.location.go('/start');
    }

    public getHotelsLink(area:SkiArea){
        return '#/areas/' + area.name + '/hotels';
    }
}