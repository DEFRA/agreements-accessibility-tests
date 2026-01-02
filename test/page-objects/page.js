import { browser, $ } from '@wdio/globals'

class Page {
  get pageHeading() {
    return $('h1')
  }

  async open(path) {
    return browser.url(path)
  }

  async getFarmName() {
    return await $(`[data-testid="farmName"]`).getText()
  }

  async getSBI() {
    return await $(`[data-testid="sbi"]`).getText()
  }

  async getFarmerName() {
    return await $(`[data-testid="farmerName"]`).getText()
  }

  async getPageHeader() {
    return await $(`.govuk-heading-xl`).getText()
  }

  async getLinkByPartialText(partialText) {
    const links = await $$('a.govuk-link, button.govuk-link')
    for (const link of links) {
      if (
        (await link.getText()).toLowerCase().includes(partialText.toLowerCase())
      ) {
        return link
      }
    }
    throw new Error(`Link containing "${partialText}" not found`)
  }

  get phaseTag() {
    return $('.govuk-phase-banner__content__tag')
  }

  get phaseMessage() {
    return $('.govuk-phase-banner__text')
  }

  async isBetaBannerPresent() {
    const tag = await this.phaseTag.getText()
    const msg = await this.phaseMessage.getText()
    return tag.includes('Beta') && msg.includes('This is a new service.')
  }
}

export { Page }
