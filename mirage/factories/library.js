import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `${faker.company.companyName()} Library`;
  },
  address() {
    return faker.address.streetAddress();
  },
  phone() {
    return faker.phone.phoneNumber();
  }
});
