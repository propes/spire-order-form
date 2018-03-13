using System;

public class Order
{
   public string CompanyName { get; set; }
   
   public DateTime OrderDate { get; set;}
   
   public int Quantity { get; set; }

   public Order(string companyName, int quantity)
   {
       this.CompanyName = companyName;
       this.Quantity = quantity;
       this.OrderDate = DateTime.Now;
   }
}