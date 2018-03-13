import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';

import { CompanyNameService } from './services/company-name.service';
import { OrderService } from './services/order.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        CompanyNameService,
        OrderService
    ]
})
export class AppModuleShared {
}
