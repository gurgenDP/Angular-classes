import { Component } from "@angular/core";


@Component(
    {
        selector: 'new-component',
        templateUrl: './new-component.html',
        styleUrls: ['./new-component.css']
    }
)
export class NewComponent {
    count: number = 0;

    increment() {
        this.count++;
    }
}

