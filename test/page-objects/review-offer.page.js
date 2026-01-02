import { Page } from './page.js'

class ReviewOfferPage extends Page {
  open() {
    const proxy = `${browser.options.proxy}`
    return super.open(proxy)
  }

  async getActionTableRowData(rowIndex) {
    const action = await $(`#actionTableActionRow${rowIndex}`).getText()
    const code = await $(`#actionTableCodeRow${rowIndex}`).getText()
    const parcel = await $(`#actionTableLandParcelRow${rowIndex}`).getText()
    const quantity = await $(`#actionTableQuantityRow${rowIndex}`).getText()
    const duration = await $(`#actionTableDurationRow${rowIndex}`).getText()

    console.log(
      `Row ${rowIndex} - Action: ${action}, Code: ${code}, Parcel: ${parcel}, Quantity: ${quantity} , Duration: ${duration}`
    )
    return { action, code, parcel, quantity, duration }
  }

  async getPaymentsTableRowData(rowIndex) {
    const action = await $(`#paymentsTableActionRow${rowIndex}`).getText()
    const code = await $(`#paymentsTableCodeRow${rowIndex}`).getText()
    const paymentRate = await $(
      `#paymentsTablePaymentRateForEachYearRow${rowIndex}`
    ).getText()
    const firstPayment = await $(
      `#paymentsTableFirstPaymentRow${rowIndex}`
    ).getText()
    const subsequentPayments = await $(
      `#paymentsTableSubsequentPaymentRow${rowIndex}`
    ).getText()
    const yearlyPayment = await $(
      `#paymentsTableYearlyPaymentRow${rowIndex}`
    ).getText()

    console.log(
      `Row ${rowIndex} - Action: ${action}, Code: ${code}, Payment Rate: ${paymentRate}, First Payment: ${firstPayment},Subsequent payments : ${subsequentPayments}, Yearly: ${yearlyPayment}`
    )

    return {
      action,
      code,
      paymentRate,
      firstPayment,
      subsequentPayments,
      yearlyPayment
    }
  }

  async getTotalFirstPayment() {
    return await $(`#paymentsTableTotalFirstPayment`).getText()
  }

  async getTotalSubsequentPayment() {
    return await $(`#paymentsTableTotalSubsequentPayment`).getText()
  }

  async getTotalYearlyPayment() {
    return await $(`#paymentsTableTotalYearlyPayment`).getText()
  }

  async selectContinue(selector) {
    const button = await $('button[value="display-accept"]')
    await button.click()
  }

  async checkPostcodePresent() {
    const text = await $('body').getText()
    return text.includes('DY14 0UY')
  }

  async getTermsAndConditionsLink() {
    return await this.getLinkByPartialText(
      'Farm payments technical test terms and conditions'
    )
  }

  async getTechnicalTestInfoLink() {
    return await this.getLinkByPartialText(
      'Farm payments technical test information'
    )
  }

  async getTechnicalTestActionsLink() {
    return await this.getLinkByPartialText(
      'Farm payments technical test actions'
    )
  }

  async getDraftAgreementLink() {
    return await this.getLinkByPartialText(
      'View a printable version of your draft agreement (opens in new tab)'
    )
  }

  async clickPrintableAgreementLinkAndSwitchTab() {
    const link = await $('a[href*="/agreement/"][href*="/print"]')
    await link.click()

    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[handles.length - 1])
  }

  async goToMainWindow() {
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[0])
  }
}

export { ReviewOfferPage }
