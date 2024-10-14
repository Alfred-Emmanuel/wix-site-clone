import { CashAppPay, CreditCard, GooglePay, PaymentForm } from 'react-square-web-payments-sdk'

function CustomPaymentForm() {
    const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID
    const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID

    return (
        <PaymentForm
            applicationId={appId}
            locationId={locationId}
            formProps={{
                className: 'flex flex-col gap-3',
            }}
            cardTokenizeResponseReceived={async (token: string) => {
                // we’ll come back to this soon
                console.log(token)
            }}
            createPaymentRequest={() => ({
                countryCode: 'US',
                currencyCode: 'USD',
                lineItems: [
                    {
                        amount: '22.15',
                        label: 'Item to be purchased',
                        id: 'SKU-12345',
                        imageUrl: 'https://url-cdn.com/123ABC',
                        pending: true,
                        productUrl: 'https://my-company.com/product-123ABC',
                    },
                ],
                taxLineItems: [
                    {
                        label: 'State Tax',
                        amount: '8.95',
                        pending: true,
                    },
                ],
                discounts: [
                    {
                        label: 'Holiday Discount',
                        amount: '5.00',
                        pending: true,
                    },
                ],
                requestBillingContact: false,
                requestShippingContact: false,
                shippingOptions: [
                    {
                        label: 'Next Day',
                        amount: '15.69',
                        id: '1',
                    },
                    {
                        label: 'Three Day',
                        amount: '2.00',
                        id: '2',
                    },
                ],
                // pending is only required if it's true.
                total: {
                    amount: '41.79',
                    label: 'Total',
                },
            })}
        >
            <GooglePay buttonSizeMode="fill" buttonColor="white" />
            <CashAppPay width="full" shape="semiround" />
            <CreditCard
                buttonProps={{
                    css: {
                        backgroundColor: '#000000',
                        color: '#fff',
                        transition: 'all 200ms ease-in-out ',
                        '&:hover': {
                            backgroundColor: '#5e5e5e',
                        },
                    },
                }}
            />
        </PaymentForm>
    )
}

export default CustomPaymentForm
