export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('invitation', 10);
  server.createList('library', 10);
  server.createList('contact', 10);
}
