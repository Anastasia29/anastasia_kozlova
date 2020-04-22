import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

    public showMoreInfo: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleShowMoreInfo() {
        this.showMoreInfo = !this.showMoreInfo;
    }

}
