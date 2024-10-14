// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { useEffect } from 'react'
// import { CashAppPay, CreditCard, GooglePay, PaymentForm } from 'react-square-web-payments-sdk'
// import { submitPayment } from '../actions/actions'

// interface PaymentDetails {
//     details: {
//         card: {
//             brand: string
//             expMonth: number
//             expYear: number
//             last4: string
//         }
//         method: string
//     }
//     status: string
//     token: string
// }

// interface PaymentHookProps {
//     amount: number
// }

// const useSquarePayments = ({ amount }: PaymentHookProps) => {
//     const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID
//     const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID

//     const tokenize = async (paymentMethod: any) => {
//         const tokenResult = await paymentMethod.tokenize()

//         if (tokenResult.status === 'OK') {
//             return tokenResult.token
//         }
//         let errorMessage = `Tokenization failed with status: ${tokenResult.status}`

//         if (tokenResult.errors) {
//             errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`
//         }

//         throw new Error(errorMessage)
//     }

//     const verifyBuyer = async (payments: any, token: string) => {
//         const verificationDetails = {
//             amount: '1.00',
//             billingContact: {
//                 givenName: 'John',
//                 familyName: 'Doe',
//                 email: 'john.doe@square.example',
//                 phone: '3214563987',
//                 addressLines: ['123 Main Street', 'Apartment 1'],
//                 city: 'London',
//                 state: 'LND',
//                 countryCode: 'GB',
//             },
//             currencyCode: 'GBP',
//             intent: 'CHARGE',
//         }

//         const verificationResults = await payments.verifyBuyer(token, verificationDetails)

//         return verificationResults.token
//     }

//     const createPayment = (item: string, is: string) => {
//         console.log({ item, is })
//     }

//     useEffect(() => {
//         const handleGooglePay = async (payments: any, event: MouseEvent, paymentMethod: any) => {
//             event.preventDefault()

//             try {
//                 const token = await tokenize(paymentMethod)

//                 const verificationToken = await verifyBuyer(payments, token)

//                 const paymentResults = await createPayment(token, verificationToken)

//                 console.debug('Payment Success', paymentResults)
//             } catch (e: any) {
//                 console.error(e.message)
//             }
//         }

//         const initSquare = async () => {
//             if (!window.Square) {
//                 throw new Error('Square.js failed to load properly')
//             }

//             try {
//                 const payments = window.Square.payments(appId, locationId)

//                 const paymentRequest = payments.paymentRequest({
//                     countryCode: 'GB',
//                     currencyCode: 'GBP',
//                     total: {
//                         amount: amount,
//                         label: 'Total',
//                     },
//                 })

//                 const googlePay = await payments.googlePay(paymentRequest)

//                 const googlePayButton = document.getElementById('google-pay-button')

//                 if (!googlePayButton) return

//                 googlePayButton.addEventListener('click', async (event) => {
//                     await handleGooglePay(payments, event, googlePay)
//                 })
//             } catch (e) {
//                 console.error('Initializing Google Pay failed', e)
//             }
//         }

//         initSquare()
//     }, [amount, appId, locationId])

//     const handleTokenizeResponse = async (token: PaymentDetails) => {
//         try {
//             const result = await submitPayment(token?.token, amount)
//             console.log('Payment Success:', result)
//         } catch (error: any) {
//             console.error('Payment Failure:', error.message)
//         }
//     }

//     const createPaymentRequest = () => ({
//         countryCode: 'US',
//         currencyCode: 'USD',
//         lineItems: [
//             {
//                 amount: '22.15',
//                 label: 'Item to be purchased',
//                 id: 'SKU-12345',
//                 imageUrl: 'https://url-cdn.com/123ABC',
//                 pending: true,
//                 productUrl: 'https://my-company.com/product-123ABC',
//             },
//         ],
//         taxLineItems: [
//             {
//                 label: 'State Tax',
//                 amount: '8.95',
//                 pending: true,
//             },
//         ],
//         discounts: [
//             {
//                 label: 'Holiday Discount',
//                 amount: '5.00',
//                 pending: true,
//             },
//         ],
//         requestBillingContact: false,
//         requestShippingContact: false,
//         shippingOptions: [
//             {
//                 label: 'Next Day',
//                 amount: '15.69',
//                 id: '1',
//             },
//             {
//                 label: 'Three Day',
//                 amount: '2.00',
//                 id: '2',
//             },
//         ],
//         total: {
//             amount: '41.79',
//             label: 'Total',
//         },
//     })

//     return {
//         PaymentForm,
//         GooglePay,
//         CashAppPay,
//         CreditCard,
//         handleTokenizeResponse,
//         createPaymentRequest,
//     }
// }

// export default useSquarePayments
