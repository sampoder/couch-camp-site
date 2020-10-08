const stripe = require('stripe')(process.env.STRIPE_API_KEY);

export default async (req, res) => {
  const {
    query: { amount },
  } = req
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        name: 'Donation to WSC GoFundMe',
        description: 'Many countries don\'t have access to GoFundMe, you can use this form as a proxy. All donations made here will go to the WSC GoFundMe. This was created for Couch Camp. You will receive an email with a receipt, this can be used as your payment proof. This form is in USD. ',
        images: ['https://cloud-mhzxvfhg5.vercel.app/0119950296_152460869594373_1260401778425122871_n.jpg'],
        amount: amount*100, // Cents
        currency: 'usd',
        quantity: 1
      }
    ],
    success_url: 'https://docs.google.com/forms/d/e/1FAIpQLSeRVHLBlWjNt4J25oU3zyLWMvCcFj8eUZV7Yg_HHtokOqYdLg/viewform?usp=pp_url&entry.1340452357={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://couch.camp'
  });

  return res.status(200).json(session);
};
