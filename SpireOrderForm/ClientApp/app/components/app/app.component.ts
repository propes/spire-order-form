import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { CompanyNameService } from '../../services/company-name.service';
import { OrderService } from '../../services/order.service';
import { Company } from '../../models/company.model';

@Component({
   selector: 'app',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   private companyName: string = "";
   private companyMatches: Company[] = [];
   private orderQuantity: number = 0;
   private companyOrders: Order[] = [];
   private companyIsSelected: boolean = false;

   constructor(
      private companyNameService: CompanyNameService,
      private orderService: OrderService
   ) { }

   onCompanyNameKeyUp($event: any) {
      this.clearCompanyNameSelection();

      if (this.companyName.length > 2) {
         this.getCompanyNames();
      } else {
         this.companyMatches = [];
      }
   }

   onCompanySelected(selectedCompany: Company) {
      this.setCompanyNameSelection(selectedCompany.name);
   }

   onSubmit() {
      var order = new Order(this.companyName, this.orderQuantity);
      this.orderService.createOrder(order)
         .subscribe(response => {
            this.companyOrders.push(response.json() as Order);
         }, error => {
            // Handle error.
         });
   }

   setCompanyNameSelection(companyName: string) {
      this.companyName = companyName;
      this.companyIsSelected = true;
      this.getHistoricalOrders();
   }

   clearCompanyNameSelection() {
      this.companyIsSelected = false;
      this.companyOrders = [];
   }

   getCompanyNames(): void
   {
      this.companyNameService.getNames(this.companyName)
         .subscribe(response => {
            debugger;
            this.companyMatches = response.json().companies as Company[];
            if (this.companyMatches.length === 1 &&
                this.companyName === this.companyMatches[0].name) {
               this.setCompanyNameSelection(this.companyMatches[0].name);
            }
         }, error => {
            this.companyMatches = [];
         });
   }

   getHistoricalOrders() {
      this.orderService.getOrders(this.companyName)
         .subscribe(response => {
            this.companyOrders = response.json() as Order[];
         }, error => {
            this.companyOrders = [];
         });
   }
}