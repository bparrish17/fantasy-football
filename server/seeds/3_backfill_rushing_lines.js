/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const update = async (criteria, rushYards, rushTds) => await knex('players').where(criteria).update({ x_rush_yards: rushYards, x_rush_tds: rushTds  })

  await update({ last_name: 'Mixon' }, 875.5, 7.5);
  await update({ first_name: 'Zack', last_name: 'Moss' }, 763, 6.5);
  await update({ first_name: 'Lamar', last_name: 'Jackson' }, 680.5, 5);
  await update({ first_name: 'James', last_name: 'Cook' }, 925.5, 4.5);
  await update({ last_name: 'Pacheco' }, 900.5, 7);
  await update({ first_name: 'Jaylen', last_name: 'Warren' }, 613, 4.5);
  await update({ first_name: 'J.K.', last_name: 'Dobbins' }, 550.5, 3.5);
  await update({ first_name: 'Tyjae', last_name: 'Spears' }, 475.5, null);
  await update({ first_name: 'Brian', last_name: 'Robinson Jr.' }, 750.5, 4.5);
  await update({ first_name: 'Gus', last_name: 'Edwards' }, 650.5, 4.5);
  await update({ first_name: 'Ezekiel', last_name: 'Elliott' }, 588, 5.5);
  await update({ first_name: 'Jonathan', last_name: 'Taylor' }, 1013, 9);
  await update({ first_name: 'David', last_name: 'Montgomery' }, 775.5, 9);
  await update({ first_name: 'Rachaad', last_name: 'White' }, 825.5, 5.5);
  await update({ first_name: 'Jahmyr', last_name: 'Gibbs' }, 888, 7.5);
  await update({ first_name: `D'Andre`, last_name: 'Swift' }, 750.5, 5.5);
  await update({ first_name: 'Kenneth', last_name: 'Walker' }, 900.5, 8.5);
  await update({ first_name: 'Jonathon', last_name: 'Brooks' }, 800.5, 4.5);
  await update({ first_name: 'Kyler', last_name: 'Murray' }, 460.5, 4.5);
  await update({ first_name: 'Marshawn', last_name: 'Lloyd' }, 480.5, null);
  await update({ first_name: 'Jayden', last_name: 'Daniels' }, 538, 4.5);
  await update({ first_name: 'Blake', last_name: 'Corum' }, 500.5, null);
  await update({ first_name: 'Trey', last_name: 'Benson' }, 550.5, null);
  await update({ first_name: 'James', last_name: 'Conner' }, 713, 6.5);
  await update({ first_name: 'Anthony', last_name: 'Richardson' }, 538, 8);
  await update({ first_name: 'Zamir', last_name: 'White' }, 775.5, 4.5);
  await update({ first_name: 'Josh', last_name: 'Allen' }, 483, 9.5);
  await update({ first_name: 'Alvin', last_name: 'Kamara' }, 638, 4.5);
  await update({ first_name: 'Breece', last_name: 'Hall' }, 1025.5, 7.5);
  await update({ last_name: 'McCaffrey' }, 1150.5, 10.5);
  await update({ first_name: 'Bijan', last_name: 'Robinson' }, 988, 6.5);
  await update({ first_name: 'Devin', last_name: 'Singletary' }, 738, 4.5);
  await update({ first_name: 'Derrick', last_name: 'Henry' }, 975.5, 10.5);
  await update({ first_name: 'Raheem', last_name: 'Mostert' }, 688, 8.5);
  await update({ first_name: 'Najee', last_name: 'Harris' }, 825.5, 6);
  await update({ first_name: 'Josh', last_name: 'Jacobs' }, 938, 7.5);
  await update({ first_name: 'Tony', last_name: 'Pollard' }, 788, 5);
  await update({ first_name: 'Saquon', last_name: 'Barkley' }, 1000, 6.5);
  await update({ first_name: 'Travis', last_name: 'Etienne' }, 920.5, 7);
  await update({ last_name: 'Achane' }, 750.5, 7);
  await update({ first_name: 'Jalen', last_name: 'Hurts' }, 550.5, 10);
  await update({ first_name: 'Aaron', last_name: 'Jones' }, 750.5, 5);
  await update({ first_name: 'Rhamondre', last_name: 'Stevenson' }, 750.5, 4.5);
  await update({ first_name: 'Austin', last_name: 'Ekeler' }, 435.5, null);
  await update({ first_name: 'Kyren', last_name: 'Williams' }, 950.5, 9.5);
  await update({ first_name: 'Javonte', last_name: 'Williams' }, 625.5, null);
};
