# bip39wordlist
bip39 wordlists

https://www.npmjs.com/package/bip39wordlist

https://serapath.github.io/bip39wordlist/


# use
`npm install bip39wordlist`
```js
const use = require('bip39wordlist')

const chinese_simplified = require('bip39wordlist/chinese_simplified.json')
const chinese_traditional = require('bip39wordlist/chinese_traditional.json')
const english = require('bip39wordlist/english.json')
const french = require('bip39wordlist/french.json')
const italian = require('bip39wordlist/italian.json')
const japanese = require('bip39wordlist/japanese.json')
const korean = require('bip39wordlist/korean.json')
const spanish = require('bip39wordlist/spanish.json')
// const german = require('bip39wordlist/german.json') // @TODO: add 2048 words long german wordlist


// const wordlist = chinese_simplified
// const wordlist = chinese_traditional
// const wordlist = english
// const wordlist = french
// const wordlist = italian
// const wordlist = japanese
// const wordlist = korean
const wordlist = spanish

const { list, seperator, bits, reverselist } = use(wordlist)

console.log(list.length) // 2048
console.log(bits) // 11
console.log(wordlist[5]) // "abono"
console.log(seperator) // " "
console.log(reverselist["abono"]) // 5
```
