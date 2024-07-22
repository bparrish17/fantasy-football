const csv = require('csvtojson')
const path = require('path');

exports.getFromCsv = function (name) {
  return csv().fromFile(path.join(__dirname, `../data/${name}.csv`))
}

