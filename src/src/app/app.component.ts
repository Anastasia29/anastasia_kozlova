import {Component} from '@angular/core';

@Component({
    selector: 'app-root', //HTML TAG FÜR DEN AUFRUF DEINES COMPOENENTS
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public title = 'Anastasia Kozlova';
    public email: string;
    public password: string;

    constructor() {
    }

}

