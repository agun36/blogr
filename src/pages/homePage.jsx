import React from "react";
import { Header } from "components/header";
import { About } from "components/about";
import { Infrastructure } from "components/infrastructure";
import { Footer } from "components/footer";
 
export const HomePage = () => {
  return (
    <main>
      <Header />
      <About />
      <Infrastructure />
      <Footer />
    </main>
  );
};
