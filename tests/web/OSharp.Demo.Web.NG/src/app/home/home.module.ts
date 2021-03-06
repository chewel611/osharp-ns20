import { NgModule, } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TranslateModule, } from '@ngx-translate/core';

import { AngleModule } from "../shared/angle/angle.module";
import { HomeComponent } from './home.component';
import { HomeRoutingModule, } from './home.routing';

// TODO: import components and services
// import { DemoComponent } from './demo/demo.component';
// import { DemoService } from './demo/demo.service';

@NgModule({
    declarations: [
        HomeComponent,
        // TODO: add components
        // DemoComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        HomeRoutingModule,
        AngleModule
    ],
    providers: [
        // TODO: and services
        // DemoService
    ]
})
export class HomeModule { }

/*
请到 app.routing.ts 中添加如下路由（放在 { path: '**', redirectTo: 'layout/optimus-prime' } 之前）：

{
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard]
},

 */
