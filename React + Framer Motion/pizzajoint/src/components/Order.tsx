import type React from "react";

interface OrderProps {
  pizza: any;
}
const Order: React.FC<OrderProps> = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping: any) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
