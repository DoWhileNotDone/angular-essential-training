import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    'selector': 'mw-app',
    'templateUrl': './app.component.html',
    'styleUrls': [
        './app.component.css',
    ],
    encapsulation: ViewEncapsulation.Emulated,
    // 'styles': [
    //     `
    //         h1 { color: blue; }
    //         .description {
    //             font-style: italic;
    //             color: green;
    //         }
    //     `
    // ],
})
export class AppComponent {}
