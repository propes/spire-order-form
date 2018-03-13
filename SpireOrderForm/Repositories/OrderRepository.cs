using System.Collections.Generic;

public class OrderRepository : IOrderRepository
{
   private readonly List<Order> _orders = new List<Order>();

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