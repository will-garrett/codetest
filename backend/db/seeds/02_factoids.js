
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('factoids').del()
    .then(function () {
      // Inserts seed entries
      return knex('factoids').insert([
        {id: 1, interest_id: 1, fact:'This is my motorcycle, a 847cc liquid cooled, 3 cylinder (triple), lane-splittling beast.'},
        {id: 2, interest_id: 1, fact:'Her name is Yvette'},
        {id: 3, interest_id: 2, fact:'This is my first motorcycle, an air-cooled 487cc Suzuki GS500. I purchased used for $1500, it cost $100/yr to insure. It was sluggish, dented, scraped, and beaten long before I owned it, but it worked.'},
        {id: 4, interest_id: 2, fact:'Her name is Suzie'},
        {id: 5, interest_id: 3, fact:'I would like to own one of these, but I\'d be disowned by my motorcycle buddies...'},
        {id: 6, interest_id: 3, fact:'It\'s eco-friendly which is cool, and would be perfect for commuting to OpenDrives!'},
        {id: 7, interest_id: 3, fact:'Since I don\'t own one, I can\'t name her but her name would probably start with a Z.'},
        {id: 8, interest_id: 4, fact:'Riding this motorcycle to Big Sur via PCH, is on my bucket-list.'},
        {id: 9, interest_id: 4, fact:'If I owned her, her name would likely be Bernadette'},
        {id: 10, interest_id: 2, fact: 'It broke down once a month, and is now broken down in my garage...'},
        {id: 11, interest_id: 2, fact: 'I like to think that ONE DAY I\'ll fix it, but who am I kidding, this thing is a death trap. '},
        {id: 12, interest_id: 2, fact:'If I had a dollar for every time this bike tried to kill me, I\'d have $5, maybe $5.50 if you count the time I accidently wheelied in front of a cop and he mistook me for a hooligan.'}
      ]);
    });
};
