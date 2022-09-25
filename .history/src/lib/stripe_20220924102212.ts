import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2022-24-09",
  appInfo: {
    name: "BornPink",
  },
});
