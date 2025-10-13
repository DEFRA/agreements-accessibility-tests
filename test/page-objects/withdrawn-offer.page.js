import { Page } from './page.js'
class WithdrawnOfferPage extends Page {
  async getHeading() {
    return await $('h1.govuk-heading-l').getText()
  }

  async getBodyText() {
    return await $('p.govuk-body').getText()
  }
}

export { WithdrawnOfferPage }
