import Head from "next/head";
import { ContentContainer, Hero } from "./index.style";

export default function Home() {
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
            <span>for $9.90 month</span>
          </p>
        </Hero>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </ContentContainer>
    </>
  );
}
