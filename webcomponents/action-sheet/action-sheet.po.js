module.exports = class ActionSheetPageObject {
  constructor(component) {
    this.component = component
  }

  clickOn(value) {
    const option = Array
      .from(this.component.querySelectorAll('.option'))
      .filter(option => option.textContent === value)[0]

    if (option) {
      option.click()
    }
  }
}
