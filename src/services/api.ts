import { faker } from '@faker-js/faker';
import { Result } from '../types';

const getImage = () => faker.image.animals(644, 362, true);
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = type => faker.animal[type]();

const data: Result[] = [...new Array(100)].map((item, index) => {
  const type = getType();
  const obj: Result = {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  }
  return obj;
});

export default data;
