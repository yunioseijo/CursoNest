import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  findOneById(id: number) {
    return this.cars.find((car) => car.id === id);
  }
  findAll() {
    return this.cars;
  }
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2019,
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Mustang',
      year: 2021,
    },
  ];
}
