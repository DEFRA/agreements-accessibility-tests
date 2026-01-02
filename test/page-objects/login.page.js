import { Page } from './page.js'
import { USERNAME } from '../helper/constants.js'

class LoginPage extends Page {
  async login(id) {
    const proxy = `${browser.options.proxy}`
    this.open(proxy)
    const usernameInput = await $('#crn')
    const passwordInput = await $('#password')
    const submitButton = await $('button[type="submit"]')

    await usernameInput.setValue(USERNAME)
    await passwordInput.setValue(process.env.DEFRA_ID_USER_PASSWORD)
    await submitButton.click()
  }
}

export { LoginPage }
