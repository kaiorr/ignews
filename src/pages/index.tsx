import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../Components/SubscribeButton/SubscribeButton";
import { stripeService } from "../Services/stripe";
import { ContentContainer, Hero } from "./index.style";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <ContentContainer>
        <Hero>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the puclications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </Hero>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </ContentContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripeService.prices.retrieve(
    "price_1J6j26F04UInIJpZhwtVRURb",
    {
      expand: ["product"],
    }
  );

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
