import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  email() {
    return faker.internet.email();
  },
  message() {
    return faker.lorem.paragraph();
  }
});
