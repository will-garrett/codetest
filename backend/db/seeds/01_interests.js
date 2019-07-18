
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('interests').del()
    .then(function () {
      // Inserts seed entries
      return knex('interests').insert([
        {id: 1, image_loc: 'http://www.bikebound.com/wp-content/uploads/2019/01/Yamaha-XSR900-Custom-2.jpg', description: '2016 Yamaha XSR900'},
        {id: 2, image_loc: 'https://en.wikipedia.org/wiki/File:1997SuzukiGS500E-001.jpg', description: 'Suzuki GS500'},
        {id: 3, image_loc: 'https://www.zeromotorcycles.com/shop/images/large/zero-fxs-2019.jpg', 'description':'2019 Zero FXS'},
        {id: 4, image_loc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_R1250GS_HP_2018-10-12.jpg', description: 'BMW R1250GS'},
      ]);
    });
};
