const {describe, it, before, beforeEach} = require('mocha')
const {expect} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-colors'))
  .use(require('chai-style'))

let element

describe('mn-input (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createElement)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnInput = window.customElements.get('mn-input')
      element = new MnInput()
      expect(element).to.be.instanceof(MnInput)
    })

    it('should work with document.createElement()', () => {
      const MnInput = window.customElements.get('mn-input')
      element = document.createElement('mn-input')
      expect(element).to.be.instanceof(MnInput)
    })
  })

  describe('element', () => {
    it('should have the .mn-input class', () => {
      expect(element).to.have.class('mn-input')
    })

    it('should contain a input child', () => {
      // expect(element).to.contain('input').with.length(1)
      // the length above count childrens of elements, not amount of inputs
      // need to be refactor, chai-dom dont offer a counter yet
      expect(element).to.contain('input')
      expect(element.querySelectorAll('input')).to.have.length(1)
    })
  })

  describe('element style', () => {
    it('should have a relative position', () => {
      expect(element).to.have.style('position', 'relative')
    })

    it('should have a inline-block display', () => {
      expect(element).to.have.style('display', 'inline-block')
    })

    it('should have a margin', () => {
      expect(element).to.have.style('margin', '1.5em 0px 1em')
    })

    it.skip('should have a transform', () => {
      // need to be fixed in chai-style
      expect(element).to.have.style('transform', 'translateZ(0)')
    })

    it('should have a visible overflow', () => {
      expect(element).to.have.style('overflow', 'visible')
    })

    it('should have 0 outline', () => {
      expect(element).to.have.style('outline', '0')
    })

    it('should have max-width 100%', () => {
      expect(element).to.have.style('max-width', '100%')
    })

    it('should have a box-sizing in border-box', () => {
      expect(element).to.have.style('box-sizing', 'border-box')
    })

    it.skip('should have a transparent tap-highlight-color', () => {
      // need to be fixed in chai-style
      expect(element).to.have.style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
    })

    it('should have 2em line-height', () => {
      expect(element).to.have.style('line-height', '2em')
    })

    it('should have a ellipsis if text-overflow', () => {
      expect(element).to.have.style('text-overflow', 'ellipsis')
    })

    it('should disable user-select', () => {
      expect(element).to.have.style('-webkit-user-select', 'none')
    })
  })

  describe('property value', () => {
    it('should return empty string when it is undefined', () => {
      expect(element).to.be.value('')
    })

    it('should get empty string when it is setted with undefined', () => {
      element.value = undefined
      expect(element).to.have.value('')
    })

    it('should get empty string when it is setted with null', () => {
      element.value = null
      expect(element).to.have.value('')
    })

    it('should setter and getter as string', () => {
      element.value = 'test'
      expect(element).to.have.value('test')
    })
  })

  describe('attribute value', () => {
    it('should set property value when attribute changed', () => {
      element.setAttribute('value', 'test')
      expect(element).to.have.value('test')
    })

    it('should set property value when attribute is removed', () => {
      element.removeAttribute('value')
      expect(element).to.have.value('')
    })
  })

  describe('attribute autocomplete', () => {
    it('should be "off" by default', () => {
      expect(element).to.have.attribute('autocomplete', 'off')
    })
  })

  describe('attribute spellcheck', () => {
    it('should be "off" by default', () => {
      expect(element).to.have.attribute('spellcheck', 'off')
    })
  })

  describe('attribute name', () => {
    it('should define a form getter if parent form exist and has an id', () => {
      element.setAttribute('name', 'test')
      const {formID} = window
      expect(formID.test).to.be.equal(element)
    })

    it('should define a form getter if parent form exist and has a name', () => {
      element.setAttribute('name', 'test')
      const {formName} = window
      expect(formName.test).to.be.equal(element)
    })

    it('should undefine form getter (name) if element name was removed', () => {
      element.setAttribute('name', 'test')
      element.removeAttribute('name')
      const {formName} = window
      expect(formName.test).to.be.undefined
    })

    it('should undefine form getter (id) if element name was removed', () => {
      element.setAttribute('name', 'test')
      element.removeAttribute('name')
      const {formID} = window
      expect(formID.test).to.be.undefined
    })

    it('should redefine form getter (name) if element name changed', () => {
      element.setAttribute('name', 'test')
      element.setAttribute('name', 'test2')
      const {formName} = window
      expect(formName.test2).to.be.equal(element)
    })

    it('should redefine form getter (id) if element name changed', () => {
      element.setAttribute('name', 'test')
      element.setAttribute('name', 'test2')
      const {formID} = window
      expect(formID.test2).to.be.equal(element)
    })
  })

  describe('property placeholder', () => {
    it('should set the placeholder text in label', () => {
      element.placeholder = 'test'
      expect(element).to.contain('label').with.text('test')
    })

    it('should set the placeholder text in label', () => {
      element.placeholder = 'test'
      element.placeholder = 'test2'
      expect(element).to.contain('label').with.text('test2')
    })

    it('should set emtpy text if is undefined', () => {
      element.placeholder = undefined
      expect(element).to.contain('label').with.text('')
    })
  })

  describe('attribute placeholder', () => {
    it('should define a label to the placeholder', () => {
      element.setAttribute('placeholder','test')
      expect(element).to.contain('label').with.text('test')
    })

    it('should change the text', () => {
      element.setAttribute('placeholder','test')
      element.setAttribute('placeholder','test2')
      expect(element).to.contain('label').with.text('test2')
    })

    it('should set empty text if is undefined', () => {
      expect(element).to.contain('label').with.text('')
    })

    it('should set empty text to label when attribute is removed', () => {
      element.setAttribute('placeholder','test')
      element.removeAttribute('placeholder')
      expect(element).to.contain('label').with.text('')
    })
  })
})

function loadComponent() {
  require('minimalist').input
  // or
  // const {input} = require('minimalist')
}

function cleanView() {
  const form = document.querySelector('form')

  if (form) {
    form.parentNode.removeChild(form)
  }
}

function createElement() {
  const form = document.createElement('form')
  form.setAttribute('name', 'formName')
  form.setAttribute('id', 'formID')

  element = document.createElement('mn-input')

  form.appendChild(element)
  document.body.appendChild(form)
}
