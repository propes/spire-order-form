export class Order {
   public companyName: string;
   public orderDate: Date;
   public quantity: number;

   constructor(companyName: string, quantity: number) {
      this.companyName = companyName;
      this.quantity = quantity;
      this.orderDate = new Date();
   }
}