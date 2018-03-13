using System.Collections.Generic;

public interface IOrderRepository
{
   IEnumerable<Order> GetAllOrders();
   Order CreateOrder(Order order);
}