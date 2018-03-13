using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using SpireOrderForm;

namespace SpireOrderForm.Tests
{
    [TestFixture]
    public class OrdersControllerTests
    {
        [Test]
        public void GetOrdersForCompany_ReturnsEmptyIfNoCompanyOrders()
        {
            var orderController = new OrdersController(new FakeOrderRepository(
                new List<Order> {
                    new Order("Company 2", 2),
                    new Order("Company 3", 3),
                }));

            var orders = orderController.GetOrdersForCompany("Company 1");

            Assert.AreEqual(0, orders.Count());
        }

        [Test]
        public void GetOrdersForCompany_ReturnsCorrectCount()
        {
            var orderController = new OrdersController(new FakeOrderRepository(
                new List<Order> {
                    new Order("Company 1", 1),
                    new Order("Company 1", 2),
                    new Order("Company 2", 2),
                    new Order("Company 3", 3),
                }));

            var orders = orderController.GetOrdersForCompany("Company 1");

            Assert.AreEqual(2, orders.Count());
        }

        [Test]
        public void CreateOrder_CreatesNewOrder()
        {
            var orderList = new List<Order>();
            var orderController = new OrdersController(new FakeOrderRepository(orderList));

            var order = new Order("Company 1", 10);
            orderController.CreateOrder(order);

            Assert.AreSame(orderList[0], order);
        }
    }

    class FakeOrderRepository : IOrderRepository
    {
        private readonly List<Order> _orders;

        public FakeOrderRepository(List<Order> startingOrders)
        {
            _orders = startingOrders;
        }

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
}