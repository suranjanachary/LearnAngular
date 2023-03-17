import {Component} from '@angular/core';

@Component({

    selector: 'app-warning-alert',
    template: `
            <p>Error Warning !!!</p>
    `,
    styles:[`
        p{
            padding: 20 px;
            background-color: mistyrose;
            border: 1px solid red;
        }
    `]
    
    

})
export class WarningAlertComponent{

}

