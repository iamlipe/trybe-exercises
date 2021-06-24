const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const delivery = (`Olá  ${Object.values(Object.values(Object.values(order)[3])[2])[0]}, entrega para: ${Object.values(order)[0]}, ${Object.values(order)[1]}, ${Object.values(Object.values(order)[2])[0]}, ${Object.values(Object.values(order)[2])[1]}, ${Object.values(Object.values(order)[2])[2]}`)
  return delivery;
}

customerInfo(order);


order.name = 'Luiz Silva'
order.payment = 50

const orderModifier = (order) => {
  const deliveryOrder = (`Olá ${Object.values(order)[0]}, o total do seu pedido de muzzarella, calabresa e ${Object.values(Object.values(Object.values(Object.values(order)[3])[1])[0])[0]} é R$ ${Object.values(order)[4]},00.`);
  return deliveryOrder;
}

orderModifier(order);