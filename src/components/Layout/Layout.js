import React from "react";
import Navbar from "./Default/Navbar";
import Footer from "./Default/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
      {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
