
exports.seed = function(knex) {
  return knex('interests').del()
    .then(function () {
      // Inserts seed entries
      return knex('interests').insert([
        {id: 1, image_loc: '/img/yvette.jpg', description: '2016 Yamaha XSR900'},
        {id: 2, image_loc: '/img/suzy.jpg', description: 'Suzuki GS500'},
        {id: 3, image_loc: '/img/zero-fxs-studio-profile_930f0691.jpg', 'description':'2019 Zero FXS'},
        {id: 4, image_loc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_R1250GS_HP_2018-10-12.jpg', description: 'BMW R1250GS'},
      ]);
    });
};
