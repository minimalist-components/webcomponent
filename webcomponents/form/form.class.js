const {HTMLElement} = window

module.exports = class MnForm extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setSubmit()
    this.setReset()
    this.setEmpty()
    this.setAttributeDisabled()
    this.setAttributeReadonly()
  }

  static get observedAttributes() {
    return [
      'name',
      'disabled',
      'readonly',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  setStyle() {
    this.classList.add('mn-form')
  }

  setSubmit() {
    document.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'
      const srcElementInsideForm = event.target.closest('mn-form')
      const sameElement = angular.equals(this, srcElementInsideForm)
      if (enter && srcElementInsideForm && sameElement) {
        this.submit()
      }
    })

    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="submit"]')
        || event.target.matches('mn-button[submit]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.submit()
      }
    })
  }

  setReset() {
    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="reset"]')
        || event.target.matches('mn-button[reset]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.reset()
      }
    })
  }

  setEmpty() {
    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="empty"]')
        || event.target.matches('mn-button[empty]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.empty()
      }
    })
  }

  setAttributeDisabled() {
    this.disabled = this.hasAttribute('disabled')
  }

  setAttributeReadonly() {
    this.readonly = this.hasAttribute('readonly')
  }

  validate() {
    this.dispatchEvent(new Event('validate'))
    this.inputs
      .filter(input => !input.hasAttribute('disabled') && !input.hasAttribute('readonly'))
      .forEach(input => input.validate())

    const isInvalid = !this.querySelector('.invalid')
    return isInvalid
  }

  reset() {
    this.classList.remove('submitted')
    Object
      .keys(this.data)
      .forEach(name => {
        if (this[name]) {
          this[name].value = this.defaults[name]

          const validations = Object.keys(this[name].validations)
          validations.push('invalid')
          validations.forEach(validationClass => this[name].classList.remove(validationClass))
        }
      })
  }

  empty() {
    this.classList.remove('submitted')
    Object
      .keys(this.data)
      .forEach(name => {
        this[name].value = undefined
      })
  }

  get inputs() {
    return Array.from(this.querySelectorAll('.mn-input, .mn-checkbox, .mn-radio'))
  }

  get defaults() {
    const defaults = {}

    this.inputs
      .forEach(input => {
        const name = input.getAttribute('name')

        if (name) {
          defaults[name] = input.default
        }
      })

    return defaults
  }

  get data() {
    const data = {}

    this.inputs
      .forEach(input => {
        const name = input.getAttribute('name')

        if (name) {
          data[name] = input.value
        }
      })

    return data
  }

  set name(name) {
    if (name && typeof name === 'string') {
      window[name] = this
    }
  }

  set disabled(value) {
    this.inputs
      .forEach(input => {
        this.hasAttribute('disabled')
          ? input.setAttribute('disabled', 'true')
          : input.removeAttribute('disabled')
      })
  }

  set readonly(value) {
    this.inputs
      .forEach(input => {
        this.hasAttribute('readonly')
          ? input.setAttribute('readonly', 'true')
          : input.removeAttribute('readonly')
      })
  }

  submit() {
    this.classList.add('submitted')
    const isValid = this.validate()
    const event = new Event('submit')
    event.data = this.data

    if (isValid) {
      this.dispatchEvent(event)
    }
  }
}
