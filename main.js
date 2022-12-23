
const amount = 1000

const arrSpan = []

for(let i = 0; i < amount; i++){
  arrSpan.push(`<span></span>`)
}

document.querySelector('.squares-wrapper').innerHTML = arrSpan.join('')