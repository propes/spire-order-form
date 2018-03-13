using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
public class OrdersController: Controller
{
   private readonly IOrderRepository _orderRepository;

   public OrdersController(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;       
    }

    [HttpGet("Companies/{companyName}")]
    public IEnumerable<Order> GetOrdersForCompany(string companyName)
    {
        return _orderRepository.GetAllOrders()
            .Where(o => o.CompanyName.Equals(companyName, StringComparison.OrdinalIgnoreCase))
            .ToList();
    }

    [HttpPost("Create")]
    public Order CreateOrder([FromBody] Order order)
    {
        return _orderRepository.CreateOrder(order);
    } 
}