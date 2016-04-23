import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'start',
    template: '<h1>Start {{ id }}</h1>'
})
export class StartComponent{

    public id: string;
    constructor(private params:RouteParams){
        this.id= params.get('area');
    }

}