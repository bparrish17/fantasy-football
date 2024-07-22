// Ringer
// use this to read their weird div table
const playerDivs = Array.prototype.slice.call(document.getElementsByClassName('flex items-center text-main text-left h-12 border-b border-b-main'))

const data = playerDivs.map((elem) => {
  const firstChild = elem.firstChild;
  const rank = firstChild.firstChild.innerText;
  const name = Array.prototype.slice.call(elem.getElementsByClassName('max-w-[7rem] md:max-w-none whitespace-nowrap text-ellipsis overflow-hidden pr-2 lg:pr-0 type-row-name md:w-32 lg:flex-1 lg:w-auto'))[0].firstChild.innerText;
  return `${rank},${name}`;      
})

// FantasyPros
const tierRows = Array.prototype.slice.call(document.getElementsByClassName('tier-row static'))
tierRows.forEach((row) => row.remove())

const checkboxCols = Array.prototype.slice.call(document.getElementsByClassName('sticky-cell sticky-cell-two wsis-cell hide-print hide-export'))
checkboxCols.forEach((checkboxCol) => checkboxCol.remove())
