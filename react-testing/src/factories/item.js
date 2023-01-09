import { faker } from '@faker-js/faker';

export default class Item {
  name = faker.name.firstName();
  description = faker.name.lastName();
}