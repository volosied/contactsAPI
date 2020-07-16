
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {name: 'Viola Davis', number: 3017660448, email: 'viola@violadavis.com'},
        {name: 'Nell Carter', number: 2028999411, email: 'ncarter@gimmeabreak.com'},
        {name: 'Issa Rae', number: 4102229876, email: 'issa@rae.com'},
        {name: 'Eartha Kitt', number: 9194899231, email: 'kittn@earthakitt.com'}
      ]);
    });
};
