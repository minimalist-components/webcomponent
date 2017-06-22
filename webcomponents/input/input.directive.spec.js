/* global describe, it, before, beforeEach, afterEach */
const {expect} = require('chai')
  .use(require('chai-dom'))

const angular = require('angular')
require('angular-mocks')

let component
let scope

describe('mn-input (directive)', () => {
  before(loadComponent)
  beforeEach(angular.mock.module('minimalist'))
  beforeEach(createMnInput)

  describe('component', () => {
    it('should have a ngModel attribute', () => {
      expect(component).to.have.attribute('ng-model')
    })

    it('should have the .mn-input class', () => {
      expect(component).to.have.class('mn-input')
    })

    it('should contain a input property', () => {
      expect(component).to.have.property('input')
    })

    it('should contain a input child', () => {
      expect(component.querySelectorAll('input')).to.have.length(1)
    })
  })

  describe('ngModel', () => {
    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.username).to.be.undefined
      expect(component).to.have.value('')
    })

    it('should be undefined if applied undefined', () => {
      scope.username = undefined
      scope.$digest()
      expect(scope.username).to.be.undefined
      expect(component).to.have.value('')
    })

    it('should be a string if applied a string to ngModel', () => {
      scope.username = 'test'
      scope.$digest()
      expect(scope.username).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be a string if applied a string to property value', () => {
      component.value = 'test2'
      expect(scope.username).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })

    it('should be update if input dispatch event change', () => {
      component.input.value = 'test'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.username).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be update if input dispatch event input', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.username).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })

    it('should be update if input dispatch event blur', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('blur'))
      expect(scope.username).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })
  })

  describe('mn-password ngModel', () => {
    beforeEach(createMnPassword)
    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.password).to.be.undefined
      expect(component).to.have.value('')
    })

    it('should be undefined if applied undefined', () => {
      scope.password = undefined
      scope.$digest()
      expect(scope.password).to.be.undefined
      expect(component).to.have.value('')
    })

    it('should be a string if applied a string to ngModel', () => {
      scope.password = 'test'
      scope.$digest()
      expect(scope.password).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be a string if applied a string to property value', () => {
      component.value = 'test2'
      expect(scope.password).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })

    it('should be update if input dispatch event change', () => {
      component.input.value = 'test'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.password).to.be.equal('test')
      expect(component).to.have.value('test')
    })

    it('should be update if input dispatch event input', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.password).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })

    it('should be update if input dispatch event blur', () => {
      component.input.value = 'test2'
      component.input.dispatchEvent(new Event('blur'))
      expect(scope.password).to.be.equal('test2')
      expect(component).to.have.value('test2')
    })
  })

  describe('mn-date ngModel', () => {
    beforeEach(createMnDate)
    afterEach(fixAngularErrorWithFocus)
    const timezone = new Date().getTimezoneOffset() / 60

    it('should be undefined if it doesn\'t exist', () => {
      expect(scope.date).to.be.undefined
      expect(component).to.have.value(undefined)
    })

    it('should be undefined if applied undefined', () => {
      scope.date = undefined
      scope.$digest()
      expect(scope.date).to.be.undefined
      expect(component).to.have.value(undefined)
    })

    it('should be a dateISOString if applied a date to ngModel', () => {
      scope.date = new Date(2017, 3, 30, 18, 0)
      scope.$digest()
      expect(scope.date).to.be.equal(`2017-04-30T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-30T0${timezone}:00:00.000Z`)
    })

    it('should be a dateISOString if applied a dateISOString to property value', () => {
      component.value = `2017-04-30T0${timezone}:00:00.000Z`
      expect(scope.date).to.be.equal(`2017-04-30T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-30T0${timezone}:00:00.000Z`)
    })

    it('should update if input dispatch event change', () => {
      component.input.value = '2017-04-30'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.date).to.be.equal(`2017-04-30T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-30T0${timezone}:00:00.000Z`)
    })

    it('should not update if input dispatch event change while focused', () => {
      component.input.focus()
      component.input.value = '2017-04-30'
      component.input.dispatchEvent(new Event('change'))
      expect(scope.date).to.be.undefined
      expect(component).to.have.value(`2017-04-30T0${timezone}:00:00.000Z`)
    })

    it('should update if input dispatch event input', () => {
      component.input.value = '2017-04-30'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.date).to.be.equal(`2017-04-30T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-30T0${timezone}:00:00.000Z`)
    })

    it('should not update if input dispatch event input while focused', () => {
      component.input.focus()
      component.input.value = '2017-04-30'
      component.input.dispatchEvent(new Event('input'))
      expect(scope.date).to.be.undefined
      expect(component).to.have.value(`2017-04-30T0${timezone}:00:00.000Z`)
    })

    it('should update if input dispatch event blur', () => {
      component.input.focus()
      component.input.value = '2017-04-30'
      component.input.blur()
      expect(scope.date).to.be.equal(`2017-04-30T0${timezone}:00:00.000Z`)
      expect(component).to.have.value(`2017-04-30T0${timezone}:00:00.000Z`)
    })
  })
})

function loadComponent() {
  // require('minimalist').input
  require('./input.directive.js')
}

function createMnInput() {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-input')
    component.setAttribute('ng-model', 'username')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()
  })
}

function createMnPassword() {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-password')
    component.setAttribute('ng-model', 'password')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()
  })
}

function createMnDate() {
  return angular.mock.inject(($rootScope, $compile) => {
    scope = $rootScope.$new()
    component = document.createElement('mn-date')
    component.setAttribute('ng-model', 'date')
    document.body.appendChild(component)
    $compile(component)(scope)
    scope.$digest()
  })
}

function fixAngularErrorWithFocus() {
  component.input.blur()
}
