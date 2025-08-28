import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Mustang',
    },
  ];
  // createCar(createCarDto: CreateCarDto) {
  //   const dto = CreateCarDto.create(createCarDto);
  //   const newId = this.cars.length > 0 ? Math.max(...this.cars.map((car) => car.id)) + 1 : 1;
  //   const newCar = { id: newId, ...dto };
  //   this.cars.push(newCar);
  //   return newCar;
  // }
  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return car;
  }
  findAll() {
    return this.cars;
  }
}
