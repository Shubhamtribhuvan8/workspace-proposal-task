// import '../styles/globals.css'
import "../styles/global.scss";
import "antd/dist/antd.js";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
