import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const VALID_PRICE_IDS = new Set([
  'price_1TqCrFEsRS7JswWPxnmAsgvf',
  'price_1TqCrlEsRS7JswWPmgkqke8e',
  'price_1TqCsJEsRS7JswWPgZtNVPxA',
])

export async function POST(req: NextRequest) {
  const { priceId, quantity, email } = await req.json()

  if (!priceId || !VALID_PRICE_IDS.has(priceId)) {
    return NextResponse.json({ error: 'Invalid priceId' }, { status: 400 })
  }

  const qty = parseInt(quantity, 10)
  if (!qty || qty < 1 || qty > 10) {
    return NextResponse.json({ error: 'Invalid quantity' }, { status: 400 })
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://esta.gourmety.com'

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: qty }],
      customer_email: email || undefined,
      success_url: `${baseUrl}/pago-completado?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/solicitar-esta`,
      locale: 'es',
      payment_method_types: ['card'],
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    return NextResponse.json({ error: 'Error al crear la sesión de pago' }, { status: 500 })
  }
}
