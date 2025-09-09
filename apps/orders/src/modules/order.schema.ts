import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class OrderDocument extends AbstractDocument {
  @Prop({ required: true })
  userId: string;

  @Prop({
    type: [
      {
        productId: String,
        quantity: Number,
        price: Number, // preço congelado no momento da compra
        name: String, // opcional: snapshot para histórico
      },
    ],
  })
  items: {
    productId: string;
    quantity: number;
    price: number;
    name?: string;
  }[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({
    default: 'pending',
    enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'],
  })
  status: string;

  @Prop({
    type: Object,
    required: true,
  })
  shippingAddress: {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };

  @Prop({
    type: Object,
    default: { status: 'pending' },
  })
  payment: {
    transactionId?: string;
    status: string; // pending, approved, failed
  };
}

export const OrderSchema = SchemaFactory.createForClass(OrderDocument);
