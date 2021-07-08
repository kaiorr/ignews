import { useSession, signIn } from "next-auth/client";
import { api } from "../../Services/api";
import { getStripeJs } from "../../Services/Stripe-js";
import { SubscribeButtonNow } from "./SubscribeButton.style";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      stripe.redirecToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
    }
  }
  return <SubscribeButtonNow type="button">Subscribe now </SubscribeButtonNow>;
}
