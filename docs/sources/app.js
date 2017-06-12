const {input, password, number, backdrop} = require('minimalist')

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  form.classList.add('submitted')
  const inputs = form.querySelectorAll('.mn-input:not([disabled]):not([readonly]')

  Array
    .from(inputs)
    .forEach(element => element.validate())

  const isInvalid = form.querySelectorAll('.mn-input.invalid').length > 0
  console.log(`form isInvalid: ${isInvalid}`)
  event.preventDefault()
})


window.MnBackdrop = backdrop
const layer = new MnBackdrop()

const button = document.querySelector('button')
button.addEventListener('click', () => {
  layer.show()
})

