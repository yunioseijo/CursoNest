import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // }
  ];
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
  create(createCarDto: CreateCarDto) {
    const newCar: Car = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);
    return newCar;
  }
  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    Object.assign(car, updateCarDto);
    return car;
  }
  // delete(id: string) {
  //   const carIndex = this.cars.findIndex((car) => car.id === id);
  //   if (carIndex === -1) {
  //     throw new NotFoundException(`Car with ID ${id} not found`);
  //   }
  //   this.cars.splice(carIndex, 1);
  // }
  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
