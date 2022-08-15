import { faker } from '@faker-js/faker';

import { IDummy } from '../type';

const LENGTH = 10;

export const dummyData = (): Array<IDummy> =>
  new Array(LENGTH).map((v) => ({
    id: faker.datatype.uuid(),
    age: faker.datatype.number({ min: 0, max: 100 }),
    isHigh: faker.datatype.boolean(),
    name: faker.name.fullName(),
  }));
