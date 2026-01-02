import { Page } from './page.js'

class ViewAgreementPage extends Page {
  // Header fields
  async getHeading() {
    return $('h1.govuk-heading-xl').getText()
  }

  async getAgreementHolder() {
    return $('dl.dataset-info dd:nth-of-type(1)').getText()
  }

  async getSBIValue() {
    return $('dl.dataset-info dd:nth-of-type(2)').getText()
  }

  async getAddress() {
    return $('dl.dataset-info dd:nth-of-type(3)').getText()
  }

  async getAgreementName() {
    return $('dl.dataset-info dd:nth-of-type(4)').getText()
  }

  async getAgreementNumber() {
    return $('dl.dataset-info dd:nth-of-type(5)').getText()
  }

  async getStartDate() {
    return $('dl.dataset-info dd:nth-of-type(6)').getText()
  }

  async getEndDate() {
    return $('dl.dataset-info dd:nth-of-type(7)').getText()
  }

  // Sub-headers
  get introSubHeader() {
    return $('#intro')
  }

  get partiesSubHeader() {
    return $('#parties')
  }

  get landSubHeader() {
    return $('#land')
  }

  get actionsSubHeader() {
    return $('#actions')
  }

  get paymentSubHeader() {
    return $('#payment')
  }

  get scheduleSubHeader() {
    return $('#schedule')
  }

  get signatureSubHeader() {
    return $('#signature')
  }

  get protectionSubHeader() {
    return $('#protection')
  }

  // Contents links
  get contentsIntroLink() {
    return $('[data-test-id="contentsIntroLink"] a')
  }

  get contentsPartiesLink() {
    return $('[data-test-id="contentsPartiesLink"] a')
  }

  get contentsLandLink() {
    return $('[data-test-id="contentsLandLink"] a')
  }

  get contentsActionsLink() {
    return $('[data-test-id="contentsActionsLink"] a')
  }

  get contentsPaymentLink() {
    return $('[data-test-id="contentsPaymentLink"] a')
  }

  get contentsScheduleLink() {
    return $('[data-test-id="contentsScheduleLink"] a')
  }

  get contentsSignatureLink() {
    return $('[data-test-id="contentsSignatureLink"] a')
  }

  get contentsProtectionLink() {
    return $('[data-test-id="contentsProtectionLink"] a')
  }

  // Generic method to get any table cell by table type, row and column
  getTableCell(tableType, rowIndex, columnIndex) {
    return $(
      `table[data-test-id="${tableType}"] tr[data-test-id="${tableType}Row${rowIndex + 1}"] td[data-test-id="${tableType}Cell${columnIndex + 1}_${columnIndex}"]`
    )
  }

  getAgreementTableCell(tableType, rowIndex, columnIndex) {
    return $(
      `table[data-test-id="${tableType}"]
      tr[data-test-id="${tableType}Row${rowIndex + 1}"]
      td[data-test-id="${tableType}Cell${rowIndex + 1}_${columnIndex}"]`
    )
  }

  getAgreementDate(labelText) {
    return $(
      `//dt[normalize-space()="${labelText}"]
      /following-sibling::dt[not(contains(normalize-space(), ':'))][1]`
    )
  }

  // Selector for the Print button
  get printButton() {
    return $('button.govuk-link.govuk-body-s.gem-c-print-link__button')
  }

  // Method to get the text of the Print button
  async getPrintButtonText() {
    return await this.printButton.getText()
  }

  // Method to get the class attribute of the Print button
  async getPrintButtonClass() {
    return await this.printButton.getAttribute('class')
  }

  // Method to check if the Print button is clickable
  async isPrintButtonClickable() {
    return await this.printButton.isClickable()
  }

  // Optional: get data-module attribute
  async getPrintButtonDataModule() {
    return await this.printButton.getAttribute('data-module')
  }

  async getDefinitionValue(labelText) {
    const dt = await $(`dl.dataset-info dt=${labelText}`)
    // Get the next sibling <dt> (the value)
    return await dt.nextElement().getText()
  }

  async getStartDateForAgreement() {
    return await this.getDefinitionValue('Agreement start date:')
  }

  async getEndDateForAgreement() {
    return await this.getDefinitionValue('Agreement end date:')
  }

  getDraftAgreementMessage() {
    return $(
      '//div[contains(@class,"govuk-notification-banner__content")]//p[1]'
    )
  }
}

export { ViewAgreementPage }
