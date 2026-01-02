import { Page } from './page.js'

class OfferAcceptedPage extends Page {
  async getConfirmationText() {
    return await $(`.govuk-panel__title`).getText()
  }

  async getStartDateText() {
    return await $('.govuk-panel__body').getText()
  }

  async getReferenceNumber() {
    return await $('p.govuk-body').getText()
  }

  // Generic helper for links by partial text
  async getLinkByPartialText(text) {
    return await $(`a*=${text}`)
  }

  async getAgreementDocumentLink() {
    return await this.getLinkByPartialText('agreement document')
  }

  async getTermsAndConditionsLink() {
    return await this.getLinkByPartialText(
      'technical test terms and conditions'
    )
  }

  async getTechnicalTestInfoLink() {
    return await this.getLinkByPartialText('technical test information')
  }

  async getTechnicalTestActionsLink() {
    return await this.getLinkByPartialText('technical test actions')
  }

  async clickAgreementDocumentLink() {
    const link = await this.getAgreementDocumentLink()
    await link.click()
  }

  async getGuidanceLink() {
    return await this.getLinkByPartialText('Read the guidance')
  }

  async getHelpText() {
    const details = await $('summary=If you need help')
    const parent = await details.parentElement()
    return parent.$('.govuk-details__text').getText()
  }

  async toggleHelpText() {
    return await $('summary=If you need help').click()
  }

  async getCallChargesLink() {
    return await this.getLinkByPartialText('Find out about call charges')
  }
}

export { OfferAcceptedPage }
