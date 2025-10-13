import { browser, $ } from '@wdio/globals'

class Page {
  get pageHeading() {
    return $('h1')
  }

  open(path) {
    return browser.url(path)
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
}

export { Page }
