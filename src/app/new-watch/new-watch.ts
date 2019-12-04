import { Component, OnInit } from '@angular/core';
@Component(
    {
        selector: 'watch',
        templateUrl: './new-watch.html',
        styleUrls: ['./new-watch.css'],
    }
)
export class NewWatch implements OnInit{
    ngOnInit() {
       this.startTimer(); 
    }

    watch: string = '00:00:00';
    startTimer() {
        setInterval(() => {
            let date: Date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            this.watch = hours + ':' + minutes + ":" + seconds;
        }, 1000);
    }
}