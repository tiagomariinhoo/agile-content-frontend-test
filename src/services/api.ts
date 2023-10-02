import { faker } from '@faker-js/faker';
import { Result } from '../types';

const getImage = () => faker.image.animals(644, 362, true);
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = type => faker.animal[type]();

const data = () => {
  return new Promise<Result[]>((resolve) => {
  setTimeout(() => {
    resolve([...new Array(100)].map((item, index) => {
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
    }))
  }, 1000)
})}

export default data;
