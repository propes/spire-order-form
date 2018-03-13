using System.Collections.Generic;

public class OrderRepository : IOrderRepository
{
   private readonly List<Order> _orders = new List<Order>
   {
      new Order("Company 2", 14),
      new Order("Company 2", 5),
      new Order("Company 2", 6),
      new Order("Company 5", 5),
      new Order("Company 5", 2),
      new Order("Company 3", 24),
      new Order("Company 3", 8),
      new Order("Company 3", 3)
   };

   public Order CreateOrder(Order order)
   {
      _orders.Add(order);
      return order;
   }

   public IEnumerable<Order> GetAllOrders()
   {
      return _orders;
   }
}