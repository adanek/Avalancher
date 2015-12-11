import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES, bind} from 'angular2/angular2';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterOutlet, RouterLink, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {SkiAreasComponent} from "./components/ski-areas.component";
import {AreaService} from "./services/area-service";
import {StartComponent} from "./components/start.component";
import {HotelComponent} from "./components/hotel.component";
import {HotelService} from "./services/hotel-service";

@Component({
    selector: 'avalauncher-app',
    templateUrl: "views/app.html",
    directives: [RouterOutlet, RouterLink]
})
@RouteConfig([
    {path: '/', component: SkiAreasComponent, as: 'Home'},
    {path: '/areas', component: SkiAreasComponent, as: 'Areas'},
    {path: '/areas/:area/hotels', component: HotelComponent, as: 'Hotels'},
    {path: '/start/:area', component: StartComponent, as: 'Start'}
])
export class AppComponent {
    public title:string;

    constructor() {
        this.title = "Welcome to Avalauncher";
    };
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy),HTTP_PROVIDERS, AreaService, HotelService]);