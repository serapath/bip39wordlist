const use = require('..')
const lists = require('..')

const parser = document.createElement('div')
parser.innerHTML = `<select autofocus name="cars" id="cars">${
  Object.keys(lists).map(name => `<option value=${name}>${name}</option>`)
}</select><pre></pre>`

const [input, listview] = parser.children
input.onclick = event => {
  const wordlist = lists[input.value]
  if (!wordlist) return console.error('invalid wordlist')
  show(wordlist)
}
document.body.append(input)
document.body.append(listview)

function show (wordlist) {
  const { list, seperator } = wordlist
  console.log(list.length) // 2048
  console.log(list[5]) // "abono"
  console.log(seperator) // " "
  listview.textContent = `${JSON.stringify(Object.entries(wordlist), 0, 2)}`
}

input.selectedIndex = 2
show(lists.english)
