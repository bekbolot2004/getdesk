import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <>
      <Header />
        <main className="min-h-[500px]">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
