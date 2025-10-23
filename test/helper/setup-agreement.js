import { request } from 'undici'
import { randomUUID } from 'crypto'
import { browser } from '@wdio/globals'

export async function setupAgreement({
  sbi,
  frn,
  agreementName,
  clientRef,
  quantity = 1.23
}) {
  const requestBody = {
    id: randomUUID(),
    source: 'fg-gas-backend',
    specVersion: '1.0',
    type: 'cloud.defra.test.fg-gas-backend.agreement.create',
    datacontenttype: 'application/json',
    data: {
      clientRef,
      code: 'frps-private-beta',
      createdAt: '2025-08-19T09:36:45.131Z',
      submittedAt: '2025-08-19T09:36:44.509Z',
      identifiers: {
        sbi,
        frn,
        crn: '1234567890',
        defraId: '1234567890'
      },
      answers: {
        hasCheckedLandIsUpToDate: true,
        agreementName,
        scheme: 'SFI',
        year: 2025,
        actionApplications: [
          {
            code: 'CMOR1',
            sheetId: 'SD6743',
            parcelId: '8083',
            appliedFor: {
              unit: 'ha',
              quantity
            }
          }
        ],
        payment: {
          agreementStartDate: '2025-09-01',
          agreementEndDate: '2028-09-01',
          frequency: 'Quarterly',
          agreementTotalPence: 96018,
          annualTotalPence: 32006,
          parcelItems: {
            1: {
              code: 'CMOR1',
              description:
                'CMOR1: Assess moorland and produce a written record',
              version: 1,
              unit: 'ha',
              quantity: 4.53411078,
              rateInPence: 1060,
              annualPaymentPence: 4806,
              sheetId: 'SD6743',
              parcelId: '8083'
            }
          },
          agreementLevelItems: {
            1: {
              code: 'CMOR1',
              description:
                'CMOR1: Assess moorland and produce a written record',
              version: 1,
              annualPaymentPence: 27200
            }
          },
          payments: [
            {
              totalPaymentPence: 8007,
              paymentDate: '2025-12-05',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2026-03-05',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2026-06-05',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2026-09-07',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2026-12-07',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2027-03-05',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2027-06-07',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2027-09-06',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2027-12-06',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2028-03-06',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2028-06-05',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            },
            {
              totalPaymentPence: 8001,
              paymentDate: '2028-09-05',
              lineItems: [
                {
                  parcelItemId: 1,
                  paymentPence: 1201
                },
                {
                  agreementLevelItemId: 1,
                  paymentPence: 6800
                }
              ]
            }
          ]
        },
        applicant: {
          business: {
            name: 'J&S Hartley',
            email: {
              address:
                'cliffspencetasabbeyfarmf@mrafyebbasatecnepsffilcm.com.test'
            },
            phone: {
              mobile: '01234031670'
            },
            address: {
              line1: 'Mason House Farm Clitheroe Rd',
              line2: 'Bashall Eaves',
              line3: null,
              line4: null,
              line5: null,
              street: 'Bartindale Road',
              city: 'Clitheroe',
              postalCode: 'BB7 3DD'
            }
          },
          customer: {
            name: {
              title: 'Mr.',
              first: 'Edward',
              middle: 'Paul',
              last: 'Jones'
            }
          }
        }
      }
    }
  }
  const url = `${browser.options.testAPIEndPointUrl}/api/test/queue-message`
  console.debug('Create agreement request URL:', url)
  console.debug(
    'Create agreement request body:',
    JSON.stringify(requestBody, null, 2)
  )
  const headers = {
    Accept: 'application/json',
    'Accept-Encoding': '*'
  }
  if (process.env.USER_TOKEN) {
    headers['x-api-key'] = process.env.USER_TOKEN
  }
  try {
    const response = await request(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody)
    })
    const raw = await response.body.text()
    console.debug('Raw response:', raw)

    let responseBody
    try {
      responseBody = JSON.parse(raw)
    } catch {
      console.error('Response was not JSON, raw body:', raw)
      throw new Error(`Expected JSON but got: ${raw.slice(0, 200)}`)
    }
    if (response.statusCode !== 200) {
      console.error('Create agreement failed with non-200 status')
      throw new Error(
        `Failed to create test agreement. Status: ${response.statusCode}, Response: ${JSON.stringify(responseBody)}`
      )
    }
    return responseBody.agreementData?.agreementNumber
  } catch (error) {
    console.error('Create agreement encountered an error:', error)
    throw error
  }
}
