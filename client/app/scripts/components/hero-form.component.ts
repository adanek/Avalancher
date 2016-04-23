import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Hero} from '../models/hero';

@Component({
    selector: 'hero-form',
    inputs: ['[(hero)]'],
    templateUrl: 'views/hero-form.component.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroFormComponent {
    @Input('hero') hero:Hero;
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic(){return JSON.stringify(this.hero);}
}