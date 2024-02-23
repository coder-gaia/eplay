import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/Api'

import Card from '../../components/Card'
import bankSlip from '../../assets/images/boleto.png'
import card from '../../assets/images/cartao.png'
import * as S from './styles'
import ParseToUsd, { getTotalPrice } from '../../utils'
import Button from '../../components/Button'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: ParseToUsd(totalPrice / i)
        })
      }
      return installmentsArray
    }
    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      ssn: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardholder: '',
      ssnCardholder: '',
      cardDisplayName: '',
      cardNumber: '',
      dueMonth: '',
      dueYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'The name must contain at least 5 characters.')
        .required('This field is mandatory.'),
      email: Yup.string()
        .email('Ivalid email.')
        .required('The field is mandatory.'),
      ssn: Yup.string()
        .min(14, 'the field must have 14 characters.')
        .max(14, 'the field must have 14 characters.')
        .required('this field is mandatory.'),
      deliveryEmail: Yup.string()
        .email('Ivalid email.')
        .required('The field is mandatory.'),
      confirmDeliveryEmail: Yup.string()
        .email("The email doesn't match.")
        .required('The field is mandatory.'),

      cardholder: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      ),
      ssnCardholder: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      ),
      dueMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      ),
      dueYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('this field is mandatory') : schema
      )
    }),
    onSubmit(values) {
      purchase({
        billing: {
          document: values.ssn,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.ssnCardholder,
              name: values.cardholder
            },
            expires: {
              month: Number(values.dueMonth),
              year: Number(values.dueYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current as number
        }))
      })
    }
  })

  const checkIfInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Thank you very much!">
          <>
            <p>
              We are pleased to inform you that we have successfully received
              your order! <br />
              Below are the details of your purchase: <br />
              Order number: {data.orderId} <br /> Payment method:{' '}
              {payWithCard ? 'Credit card' : 'Bank Slip'}
            </p>
            <p className="margin-top">
              If you have chosen to pay via bank slip, remember that
              confirmation can take up to 3 business days. After payment
              approval, we will send you an email containing the game activation
              code.
            </p>
            <p className="margin-top">
              If you chose to pay by credit card, the activation code will be
              released after the transaction has been approved by the card
              operator. You will receive the code in the email registered in our
              store.
            </p>
            <p className="margin-top">
              We ask that you check your inbox and spam folder to ensure you
              receive our communication. If you have any questions or require
              more information, please contact us through our customer service
              channels.
            </p>
            <p className="margin-top">
              Thank you for choosing EPLAY and we hope you enjoy your game!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit} className="container">
          <Card title="Billing Data">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkIfInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkIfInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="ssn">SSN</label>
                  <InputMask
                    id="ssn"
                    type="text"
                    name="ssn"
                    value={form.values.ssn}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={checkIfInputHasError('ssn') ? 'error' : ''}
                    mask="999.999.999-99"
                  />
                </S.InputGroup>
              </S.Row>

              <h3 className="margin-top">Delivery infos - digital content</h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">Email</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={
                      checkIfInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">Confirm Email</label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onBlur={form.handleBlur}
                    onChange={form.handleChange}
                    className={
                      checkIfInputHasError('confirmDeliveryEmail')
                        ? 'error'
                        : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>

          <Card title="Payment">
            <>
              <S.TabButton
                type="button"
                isActive={!payWithCard}
                onClick={() => {
                  setPayWithCard(false)
                }}
              >
                <img src={bankSlip} alt="bankSLip-icon" />
                Bank slip
              </S.TabButton>
              <S.TabButton
                type="button"
                isActive={payWithCard}
                onClick={() => {
                  setPayWithCard(true)
                }}
              >
                <img src={card} alt="card-icon" />
                Credit card
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardholder">Cardholder Name</label>
                        <input
                          type="text"
                          id="cardholder"
                          name="cardholder"
                          value={form.values.cardholder}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('cardholder') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="ssnCardholder">Cardholder SSN</label>
                        <InputMask
                          id="ssnCardholder"
                          type="text"
                          name="ssnCardholder"
                          value={form.values.ssnCardholder}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('ssnCardholder') ? 'error' : ''
                          }
                          mask="999.999.999-99"
                        />
                      </S.InputGroup>
                    </S.Row>

                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">
                          Display Name on the Card
                        </label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('cardDisplayName')
                              ? 'error'
                              : ''
                          }
                        />
                      </S.InputGroup>

                      <S.InputGroup>
                        <label htmlFor="cardNumber">Card Number</label>
                        <InputMask
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>

                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="dueMonth">Due Month</label>
                        <InputMask
                          type="text"
                          id="dueMonth"
                          name="dueMonth"
                          value={form.values.dueMonth}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('dueMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>

                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="dueDay">Due year</label>
                        <InputMask
                          type="text"
                          id="dueYear"
                          name="dueYear"
                          value={form.values.dueYear}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('dueYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>

                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.Row>

                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Installments</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          onBlur={form.handleBlur}
                          onChange={form.handleChange}
                          className={
                            checkIfInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option
                              value={installment.quantity}
                              key={installment.quantity}
                            >
                              {installment.quantity}x of{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    When choosing this payment method, it is important to
                    remember that confirmation can take up to 3 business days,
                    due to deadlines established by financial institutions.
                    Therefore, the activation code for the purchased game will
                    only be released after payment of the invoice has been
                    approved.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="submit"
            title="click here to finish the purchase"
            disabled={isLoading}
            variant="primary"
          >
            {isLoading ? 'Finishing purchase..' : 'Finish Purchase'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
