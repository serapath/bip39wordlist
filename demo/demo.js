const use = require('..')
const lists = {
  chinese_simplified: require('../chinese_simplified.json'),
  chinese_traditional: require('../chinese_traditional.json'),
  english: require('../english.json'),
  french: require('../french.json'),
  italian: require('../italian.json'),
  japanese: require('../japanese.json'),
  korean: require('../korean.json'),
  spanish: require('../spanish.json'),
  // german: require('../german.json'), // @TODO: add 2048 words long german wordlist
}

const parser = document.createElement('div')
parser.innerHTML = `<select autofocus name="cars" id="cars">${
  Object.keys(lists).map(name => `<option value=${name}>${name}</option>`)
}</select><pre></pre>`

const [input, listview] = parser.children
input.onclick = event => {
  const wordlist = lists[input.value]
  if (!wordlist) return console.error('invalid wordlist')
  const { bits, reverselist } = use(wordlist)
  show(wordlist)
  parser.innerHTML = 
  
  console.log(bits)
}
document.body.append(input)
document.body.append(listview)

function show (wordlist) {
  listview.textContent = `${JSON.stringify(Object.entries(wordlist), 0, 2)}`
}

input.selectedIndex = 2
show(lists.english)
