const { getFromCsv } = require('./utils/helpers.js')

async function getStuff() {
  const players = await getFromCsv('ringer_half_ppr_rankings');
  console.log('players: ', players)
}

getStuff();