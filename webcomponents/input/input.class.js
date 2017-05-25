const {HTMLElement} = window

module.exports = class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)

    this.validations = {
      required: () => this.value === ''
    }

    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setCssClasses()
    this._setInput()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeDisabled()
    this._setAttributeReadonly()
    this._setAttributeMaxlength()
    this._setAttributeAutocapitalize()
    this._setAttributeAutocomplete()
    this._setAttributeSpellcheck()
    this._setAttributeAutofocus()
  }

  _setCssClasses() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.classList.add('input')

    this.appendChild(this.input)

    this.input.addEventListener('change', () => { // set class .has-value
      this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('keyup', () => { // validate
      const closestForm = this.closest('form')
      closestForm && closestForm.classList.contains('submitted')
        ? this.validate()
        : null
    })
  }

  _setPlaceholder() {
    this.label = document.createElement('label')
    this.label.classList.add('placeholder')
    this.appendChild(this.label)
    this.placeholder = this.getAttribute('placeholder')
  }

  _setAttributeValue() {
    const value = this.getAttribute('value') || ''
    this.setAttribute('value', value)
  }

  _setAttributeDisabled() {
    this.disabled = this.hasAttribute('disabled')
  }

  _setAttributeReadonly() {
    this.readonly = this.hasAttribute('readonly')
  }

  _setAttributeMaxlength() {
    this.maxlength = this.getAttribute('maxlength')
  }

  _setAttributeAutocapitalize() {
    this.autocapitalize = this.getAttribute('autocapitalize') || 'off'
  }

  _setAttributeAutocomplete() {
    this.input.setAttribute('autocomplete', 'off')
  }

  _setAttributeSpellcheck() {
    this.input.setAttribute('spellcheck', 'off')
  }

  _setAttributeAutofocus() {
    this.autofocus = this.hasAttribute('autofocus')
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'maxlength',
      'autocapitalize',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  get value() {
    return this.input.value
  }

  set value(value = '') {
    const differentValue = this.input && this.input.value !== value

    if (this.input && differentValue) {
      this.input.value = value
      this.input.dispatchEvent(new Event('change'))
    }
  }

  set name(value) {
    const form = this.closest('form')
    const name = this.getAttribute('name')
    const element = this

    if (form) {
      Object.defineProperty(form, name, {
        get: () => {
          return element.getAttribute('name')
            ? element
            : undefined
        },
      })
    }
  }

  set placeholder(value) {
    this.label
      ? this.label.textContent = value
      : null
  }

  set disabled(value) {
    if (this.input) {
      this.input.disabled = value
    }
  }

  set readonly(value) {
    if (this.input) {
      this.input.readOnly = value
    }
  }

  set maxlength(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('maxlength', value)
        : this.input.removeAttribute('maxlength')
    }
  }

  set autocapitalize(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('autocapitalize', value)
        : this.input.removeAttribute('autocapitalize')
    }
  }

  set autofocus(value) {
    if (this.input) {
      this.input.autofocus = value
    }
  }

  validate() {
    const validations = {}

    for (const attribute of Object.keys(this.validations)) {
      const hasAttribute = this.hasAttribute(attribute)
      const attributeIsInvalid = this.validations[attribute]()

      if (hasAttribute && attributeIsInvalid) {
        this.classList.add(attribute)
        validations[attribute] = true
      } else {
        this.classList.remove(attribute)
      }
    }

    const isInvalid = Object.values(validations).some(item => item === true)

    isInvalid
      ? this.classList.add('invalid')
      : this.classList.remove('invalid')
  }
}
