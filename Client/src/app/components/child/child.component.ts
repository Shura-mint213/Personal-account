import { Component } from '@angular/core'
import { log } from 'console';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: [ './child.component.css' ],
})

export class ChildComponent {
    isVerdana = true;
    isNavy = true;
    isBlackTopic = false

    clickLog() {
        console.log(this.isBlackTopic)
    }

    currentClasses = {
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy,
    }
}