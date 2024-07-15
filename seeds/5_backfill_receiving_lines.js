/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const update = async (criteria, receivingYards, receivingTds) => {
    await knex('players')
      .where(criteria)
      .update({ x_rec_yards: receivingYards, x_rec_tds: receivingTds  })
  }

  await update({ first_name: 'Keenan', last_name: 'Allen' }, 825.5, null);
  await update({ first_name: 'Malik', last_name: 'Nabers' }, 863, null);
  await update({ first_name: 'Jordan', last_name: 'Addison' }, 800.5, null);
  await update({ first_name: 'Mike', last_name: 'Williams' }, 713, null);
  await update({ first_name: 'Calvin', last_name: 'Ridley' }, 875.5, null);
  await update({ first_name: 'Nico', last_name: 'Collins' }, 1025.5, null);
  await update({ first_name: 'Jayden', last_name: 'Reed' }, 763, null);
  await update({ first_name: 'Devonta', last_name: 'Smith' }, 1038, null);
  await update({ first_name: 'Xavier', last_name: 'Worthy' }, 763, null);
  await update({ first_name: 'Jameson', last_name: 'Williams' }, 700.5, null);
  await update({ first_name: 'Jerry', last_name: 'Jeudy' }, 725.5, null);
  await update({ first_name: 'Xavier', last_name: 'Legette' }, 500.5, null);
  await update({ first_name: 'Quentin', last_name: 'Johnston' }, 575.5, null);
  await update({ first_name: 'Juwan', last_name: 'Johnson' }, 425.5, null);
  await update({ first_name: 'Drake', last_name: 'London' }, 1000.5, null);
  await update({ first_name: 'Deebo', last_name: 'Samuel' }, 775.5, null);
  await update({ first_name: 'Curtis', last_name: 'Samuel' }, 625.5, null);
  await update({ first_name: 'Gabe', last_name: 'Davis' }, 725.5, null);
  await update({ first_name: 'Tyler', last_name: 'Boyd' }, 500.5, null);
  await update({ first_name: 'Rashod', last_name: 'Bateman' }, 550.5, null);
  await update({ first_name: 'Jakobi', last_name: 'Meyers' }, 650.5, null);
  await update({ first_name: 'Brandin', last_name: 'Cooks' }, 625.5, null);
  await update({ first_name: 'George', last_name: 'Kittle' }, 750.5, null);
  await update({ first_name: 'Jaylen', last_name: 'Waddle' }, 1000.5, null);
  await update({ first_name: 'Dalton', last_name: 'Schulz' }, 550.5, null);
  await update({ first_name: `Ja'Marr`, last_name: 'Chase' }, 1263, null);
  await update({ first_name: 'Sam', last_name: 'Laporta' }, 850.5, null);
  await update({ first_name: 'Cooper', last_name: 'Kupp' }, 950.5, null);
  await update({ first_name: 'D.J.', last_name: 'Moore' }, 962.5, null);
  await update({ first_name: 'George', last_name: 'Pickens' }, 1000.5, null);
  await update({ first_name: 'Garrett', last_name: 'Wilson' }, 1113, null);
  await update({ first_name: 'Justin', last_name: 'Jefferson' }, 1275.5, null);
  await update({ first_name: 'Davante', last_name: 'Adams' }, 1000.5, null);
  await update({ first_name: 'Joshua', last_name: 'Palmer' }, 700.5, null);
  await update({ first_name: 'Brock', last_name: 'Bowers' }, 650.5, null);
  await update({ first_name: 'David', last_name: 'Njoku' }, 725.5, null);
  await update({ first_name: 'Christian', last_name: 'Kirk' }, 925.5, null);
  await update({ first_name: 'Michael', last_name: 'Pittman' }, 975.5, null);
  await update({ first_name: 'Chris', last_name: 'Godwin' }, 875.5, null);
  await update({ first_name: 'Keon', last_name: 'Coleman' }, 713, null);
  await update({ first_name: 'DeAndre', last_name: 'Hopkins' }, 875.5, null);
  await update({ first_name: 'Dalton', last_name: 'Kincaid' }, 750.5, null);
  await update({ first_name: 'Chris', last_name: 'Olave' }, 1050.5, null);
  await update({ last_name: 'McCaffrey' }, 500.5, null);
  await update({ last_name: 'Okonkwo' }, 500.5, null);
  await update({ first_name: 'CeeDee', last_name: 'Lamb' }, 1350.5, null);
  await update({ first_name: 'Brandon', last_name: 'Aiyuk' }, 950.5, null);
  await update({ last_name: 'St. Brown' }, 1250.5, null);
  await update({ first_name: 'Adonai', last_name: 'Mitchell' }, 550.5, null);
  await update({ first_name: 'Ladd', last_name: 'McConkey' }, 725.5, null);
  await update({ first_name: 'Kyle', last_name: 'Pitts' }, 750.5, null);
  await update({ first_name: 'Jaxon', last_name: 'Smith-Njigba' }, 775.5, null);
  await update({ first_name: 'Zay', last_name: 'Flowers' }, 925.5, null);
  await update({ first_name: 'Tyler', last_name: 'Lockett' }, 775.5, null);
  await update({ first_name: 'Terry', last_name: 'McLaurin' }, 900.5, null);
  await update({ first_name: 'Tank', last_name: 'Dell' }, 825.5, null);
  await update({ first_name: 'Tee', last_name: 'Higgins' }, 875.5, null);
  await update({ first_name: 'Stefon', last_name: 'Diggs' }, 900.5, null);
  await update({ first_name: 'Rome', last_name: 'Odunze' }, 675.5, null);
  await update({ first_name: 'Pat', last_name: 'Friermuth' }, 475.5, null);
  await update({ first_name: 'Marvin', last_name: 'Harrison Jr.' }, 1013, null);
  await update({ first_name: 'Marquise', last_name: 'Brown' }, 750.5, null);
  await update({ first_name: 'Demario', last_name: 'Douglas' }, 600.5, null);
  await update({ first_name: 'Adam', last_name: 'Thielen' }, 550.5, null);
  await update({ first_name: 'Jake', last_name: 'Ferguson' }, 675.5, null);
  await update({ first_name: 'Amari', last_name: 'Cooper' }, 950.5, null);
  await update({ first_name: 'Tyreek', last_name: 'Hill' }, 1375.5, null);
  await update({ last_name: 'Metcalf' }, 1000.5, null);
  await update({ first_name: 'Odell', last_name: 'Beckham Jr.' }, 400.5, null);
  await update({ first_name: 'Courtland', last_name: 'Sutton' }, 800.5, null);
  await update({ first_name: 'Mike', last_name: 'Evans' }, 1050.5, null);
  await update({ first_name: 'Mark', last_name: 'Andrews' }, 800.5, null);
  await update({ first_name: 'Jahmyr', last_name: 'Gibbs' }, 350.5, null);
  await update({ first_name: 'Rachaad', last_name: 'White' }, 400.5, null);
  await update({ first_name: 'Christian', last_name: 'Watson' }, 738, null);
  await update({ first_name: 'A.J.', last_name: 'Brown' }, 1263, null);
  await update({ first_name: 'Cole', last_name: 'Kmet' }, 500.5, null);
  await update({ first_name: 'Puka', last_name: 'Nacua' }, 1150.5, null);
  await update({ first_name: 'Travis', last_name: 'Kelce' }, 900.5, null);
  await update({ first_name: 'Diontae', last_name: 'Johnson' }, 813, null);
  await update({ first_name: 'Brian', last_name: 'Thomas' }, 750.5, null);
  await update({ first_name: 'Michael', last_name: 'Wilson' }, 550.5, null);
  await update({ first_name: 'Saquon', last_name: 'Barkley' }, 300.5, null);
  await update({ first_name: 'Austin', last_name: 'Ekeler' }, 400.5, null);
  await update({ first_name: 'Breece', last_name: 'Hall' }, 500.5, null);
  await update({ first_name: 'Trey', last_name: 'McBride' }, 750.5, null);
  await update({ first_name: `Wan'Dale`, last_name: 'Robinson' }, 525.5, null);
  await update({ first_name: 'Hunter', last_name: 'Henry' }, 400.5, null);
  await update({ first_name: 'Tyler', last_name: 'Conklin' }, 425.5, null);
  await update({ first_name: 'Romeo', last_name: 'Doubs' }, 575.5, null);
  await update({ first_name: 'Darnell', last_name: 'Mooney' }, 575.5, null);
  await update({ first_name: 'Jahan', last_name: 'Dotson' }, 540.5, null);
  await update({ first_name: 'Demario', last_name: 'Davis' }, 625.5, null);
  await update({ first_name: 'Evan', last_name: 'Engram' }, 725.5, null);
  await update({ first_name: 'Dallas', last_name: 'Goedert' }, 625.5, null);
  await update({ first_name: 'Rashid', last_name: 'Shaheed' }, 540.5, null);
};
