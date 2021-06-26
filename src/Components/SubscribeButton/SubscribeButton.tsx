import { SubscribeButtonNow } from "./SubscribeButton.style";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return <SubscribeButtonNow type="button">Subscribe now </SubscribeButtonNow>;
}
