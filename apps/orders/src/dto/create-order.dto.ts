export class CreateOrderDto {
  items: {
    productId: string;
    quantity: number;
    price: number;
    name?: string;
  }[];
  totalAmount: number;
  status: string;
  shippingAddress: {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  payment: {
    transactionId?: string;
    status: string;
  };
}
