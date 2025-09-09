import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  create(createOrderDto: CreateOrderDto) {
    return this.ordersRepository.create({
      ...createOrderDto,
      userId: 'user123',
    });
  }

  findAll() {
    return this.ordersRepository.findAll({});
  }

  findOne(id: string) {
    return this.ordersRepository.findOne({ _id: id });
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.ordersRepository.findOneAndUpdate(
      { _id: id },
      { $set: updateOrderDto },
    );
  }

  remove(id: string) {
    return this.ordersRepository.findOneAndDelete({ _id: id });
  }
}
