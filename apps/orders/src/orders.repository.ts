import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { OrderDocument } from './modules/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrdersRepository extends AbstractRepository<OrderDocument> {
  protected readonly logger: Logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(OrderDocument.name) orderModel: Model<OrderDocument>,
  ) {
    super(orderModel);
  }
}
