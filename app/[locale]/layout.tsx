import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Metadata } from "next";
import "./globals.css";
import { Provider } from "./provider";

type RootLayoutProps = {
  children: ReactElement;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Provider locale="ru">
          <Header />
          <div className="pt-16">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

const baseUrl = "http://localhost:3000";

export const generateMetadata = (): Metadata => {
  return {
    title: "EasyDev",
    icons: `${baseUrl}/favicon.svg`,
  };
};

export default RootLayout;
