import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1M4vg7DYdvYdetqW6f4OXkGj'},
                    { shipping_rate: 'shr_1M4vhODYdvYdetqW7T0gYm7Z'},
                ],
                line_items: [
                  {
                    price: '{{PRICE_ID}}',
                    quantity: 1,
                  },
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
              }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.redirect(303, session.url);
          } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
          }
        } else {
          res.setHeader('Allow', 'POST');
          res.status(405).end('Method Not Allowed');
        }
      }
      
      