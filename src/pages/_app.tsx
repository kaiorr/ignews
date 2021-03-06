import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../UI/GlobalStyle/GlobalStyle";
import theme from "../UI/Themes/theme";
import { Header } from "../Components/Header/Header";
import { Provider as NextAuthProvider } from "next-auth/client";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Ig.news</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </NextAuthProvider>
    </>
  );
};

export default MyApp;
