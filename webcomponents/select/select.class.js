const MnInput = require('../input/input.class.js')
const MnActionSheet = require('../action-sheet/action-sheet.webcomponent.js')
const evaluate = require('evaluate-string')

module.exports = class MnSelect extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.empty()
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    this._setMenu()
    this._setActionSheet()
    this._setOptions()
    this._setKeyboardNavigation()
    this._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setAttributeAutocomplete()
    super._setAttributeSpellcheck()
    this._setValidations()
  }

  disconnectedCallback() {
    if (this.actionSheet) {
      this.actionSheet.parentNode.removeChild(this.actionSheet)
    }
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  empty() {
    Array
      .from(this.children)
      .forEach(children => {
        if (children.tagName !== 'OPTION') {
          this.removeChild(children)
        }
      })
  }

  _setOptions() {
    Array
      .from(this.querySelectorAll('option'))
      .forEach(option => {
        const hasAngularAttribute = Array
          .from(option.attributes)
          .some(attribute => attribute.name.startsWith('ng-'))

        if (!hasAngularAttribute) {
          this.addOption(option)
        }
      })

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // console.log(mutation)
        const addedNode = mutation.addedNodes[0]
        const removedNode = mutation.removedNodes[0]
        const addOption = addedNode && addedNode.tagName === 'OPTION'
        const removeOption = removedNode && removedNode.tagName === 'OPTION'
        if (addOption) {
          this.addOption(addedNode)
        }

        if (removeOption) {
          this.removeOption(removedNode)
        }
      })
    })

    observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false,
    })

    document.addEventListener('mousedown', (event) => {
      const isOption = event.target.classList.contains('option')
        && event.target.closest('.mn-select') === this

      if (isOption) {
        event.stopPropagation()
        event.preventDefault()

        const value = event.target.getAttribute('value') || event.target.textContent
        this.value = value
        this.input.blur()
      }
    })

    document.addEventListener('mousemove', (event) => {
      const isOption = event.target.classList && event.target.classList.contains('option')
        && event.target.closest('.mn-select') === this

      if (isOption) {
        if (!this.keyboardNavigation) {
          this.focusOption(event.target)
        }
      }
    })
  }

  addOption(value) {
    const option = document.createElement('div')
    option.classList.add('option')
    option.innerHTML = value.textContent
    const focusedOption = this.menu.querySelector('.option.focus')

    if (!focusedOption) {
      option.classList.add('focus')
    }

    option.innerHTML = value.textContent
      .split('')
      .map(char => `<span class="char" data-char="${char.toLowerCase()}">${char}</span>`)
      .join('')

    if (value.hasAttribute('value')) {
      option.setAttribute('value', value.getAttribute('value'))
    }

    this.menu.appendChild(option)

    if (this.actionSheet) {
      const actionSheetOption = document.createElement('div')
      actionSheetOption.classList.add('option')
      actionSheetOption.textContent = option.textContent
      this.actionSheet.menu.appendChild(actionSheetOption)
    }

    this.filter = this.filter
  }

  removeOption(value) {
    const option = Array
      .from(this.menu.querySelectorAll('.option'))
      .find(option => option.textContent === value.textContent)

    if (option) {
      this.menu.removeChild(option)
    }

    if (this.actionSheet) {
      const actionSheetOption = Array
        .from(this.actionSheet.menu.querySelectorAll('.option'))
        .find(option => option.textContent === value.textContent)

      if (actionSheetOption) {
        this.actionSheet.menu.removeChild(actionSheetOption)
      }
    }
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-select')
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('focus', () => {
      this.input.select()
      !this.input.hasAttribute('readonly')
        ? this.show()
        : undefined
      this.filter = undefined
    })

    this.input.addEventListener('blur', () => {
      const option = Array
        .from(this.menu.querySelectorAll('.option'))
        .filter(option => {
          const optionValue = option.getAttribute('value') || option.textContent
          return optionValue === this.getAttribute('value')
        })[0]

      if (this.input.value && option) {
        this.input.value = option.textContent
      } else {
        this.value = undefined
      }
      this.hide()
    })

    this.input.addEventListener('input', () => {
      this.filter = this.input.value
      this.focusOption(this.menu.querySelector('.option:not(.hidden)'))
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.closest('.mn-select') && event.target !== this

      if (this.visible && clickOutside) {
        this.hide()
      }
    })
  }

  _setAttributeValue() {
    const selectedOption = this.querySelector('.option[selected]')
    const selectedValue = selectedOption
      ? selectedOption.getAttribute('value') || selectedOption.textContent
      : ''

    const value = this.getAttribute('value') || selectedValue
    this.value = value
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    this.appendChild(menu)
    this.menu = menu
  }

  _setActionSheet() {
    if (screen.width < 768) {
      const actionSheet = new MnActionSheet()
      this.actionSheet = actionSheet
      this.actionSheet.addEventListener('change', (event) => {
        const {index} = event.data
        const option = this.menu.querySelector(`.option:nth-child(${index + 1})`)
        this.value = option.textContent
        this.actionSheet.hide()
      })
      document.body.appendChild(this.actionSheet)
    }
  }

  _setKeyboardNavigation() {
    this.input.addEventListener('keydown', (event) => { // arrow navigate
      const arrowDown = event.key === 'ArrowDown'
      const arrowUp = event.key === 'ArrowUp'
      let nextOption

      const options = Array.from(this.menu.querySelectorAll('.option:not(.hidden)'))
      const currentOption = this.menu.querySelector('.option.focus')

      const currentIndex = Array.prototype.indexOf.call(options, currentOption)

      if (arrowDown) {
        event.preventDefault()
        nextOption = options[currentIndex + 1]
      } else if (arrowUp) {
        event.preventDefault()
        nextOption = options[currentIndex - 1]
      }

      if (nextOption) {
        const top = nextOption.offsetTop
        const bottom = top + nextOption.clientHeight
        const scrollToTop = top < this.menu.scrollTop
        const scrollToBottom = bottom > this.menu.scrollTop + this.menu.clientHeight

        this.keyboardNavigation = true
        if (scrollToTop) {
          this.menu.scrollTop = top
        } else if (scrollToBottom) {
          this.menu.scrollTop = bottom - this.menu.clientHeight
        }

        this.focusOption(nextOption)
        setTimeout(() => {
          delete this.keyboardNavigation
        }, 100)
      }
    })

    this.input.addEventListener('keydown', event => {
      const esc = event.key === 'Escape'

      if (esc) {
        this.value = this.value
        this.input.select()
        this.filter = undefined
      }
    })

    this.input.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'

      if (enter) {
        const option = this.menu.querySelector('.option.focus')
        event.preventDefault()
        event.stopPropagation()

        option
          ? this.value = option.getAttribute('value') || option.textContent
          : this.value = this.value

        this.hide()
        this.input.blur()
      }
    })
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    delete this.validations.pattern
  }

  show() {
    this.classList.add('visible')
    this.menu.scrollTop = 0
    this.focusOption(this.querySelector('.option:first-child'))

    if (this.actionSheet) {
      this.input.blur()
      this.actionSheet.show()
    }
  }

  hide() {
    this.classList.remove('visible')
    this.removeOptionFocus()
  }

  get visible() {
    return this.classList.contains('visible')
  }

  removeOptionFocus() {
    const latest = this.menu.querySelector('.focus')
    latest
      ? latest.classList.remove('focus')
      : undefined
  }

  focusOption(option) {
    this.removeOptionFocus()
    option
      ? option.classList.add('focus')
      : null
  }

  get value() {
    return this.getAttribute('value')
      ? evaluate(this.getAttribute('value'))
      : undefined
  }

  set value(value) {
    const differentValue = this.getAttribute('value') !== value
    const option = Array
      .from(this.menu.querySelectorAll('.option'))
      .filter(option => {
        return option.getAttribute('value') == String(value) // eslint-disable-line eqeqeq
          || option.textContent == String(value) // eslint-disable-line eqeqeq
      })[0]

    const textNotApplied = option && this.input.value !== option.textContent

    if (textNotApplied) {
      this.input.value = option
        ? option.textContent
        : ''
      this.input.dispatchEvent(new Event('change'))
    }

    if (differentValue) {
      const hasValue = value !== undefined && value !== null

      hasValue && option
        ? this.setAttribute('value', option.getAttribute('value') || option.textContent)
        :  this.removeAttribute('value')

      this.input.dispatchEvent(new Event('change'))
    }

    if (!this.hasAttribute('value')) {
      this.input.value = ''
      this.input.dispatchEvent(new Event('change'))
    }
  }

  get filter() {
    return this.input.value
  }

  set filter(value) {
    if (value) {
      this.classList.add('filtered')

      try {
        Array
          .from(this.menu.querySelectorAll('.option'))
          .forEach(option => {
            const matchOption = RegExp(value.split('').join('.*'), 'i').test(option.textContent)

            Array
              .from(option.querySelectorAll('.match'))
              .forEach(char => char.classList.remove('match'))

            if (matchOption) {
              option.classList.remove('hidden')

              value
                .split('')
                .forEach(char => {
                  const selector = `span[data-char="${char.toLowerCase()}"]:not(.match)`
                  const letter = option.querySelector(`.match ~ ${selector}`) || option.querySelector(selector)
                  letter
                    ? letter.classList.add('match')
                    : null
                })

            } else {
              option.classList.add('hidden')
            }
          })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.classList.remove('filtered')
      Array
        .from(this.querySelectorAll('.option.hidden'))
        .forEach(option => option.classList.remove('hidden'))
    }
  }
}
