import Layout from "../layout/Layout";
import "../styles/globals.css";
import { Lobster } from "@next/font/google";

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={lobster.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
