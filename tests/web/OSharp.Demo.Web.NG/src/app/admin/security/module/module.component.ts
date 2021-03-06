import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ModuleService, } from './module.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 's-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit, OnDestroy {

    constructor(private _service: ModuleService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
