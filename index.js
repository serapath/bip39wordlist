module.exports = use

function use ({ list, seperator }) {
  const len = list.length
  const bits = Math.ceil(Math.log2(len))
  const reverselist = {}
  // @TODO: lift the 'power of 2' requirement
  // if (bits % 1 !== 0) throw new Error('wordlist length must be power of 2')
  // @TODO: lift the lengt constraint
  // if (bits > 25) throw new Error('wordlist must be shorter than 2^25 words')
  for (var i = 0; i < len; i++) {
    const word = list[i]
    if (typeof word !== 'string') throw new Error('all words must be strings')
    if (word.indexOf(' ') !== -1) throw new Error('words in wordlist may not contain whitespaces')
    if (reverselist[word]) throw new Error('wordlist must not contain duplicate words')
    reverselist[word] = i
  }
  return { list, seperator, bits, reverselist }
}