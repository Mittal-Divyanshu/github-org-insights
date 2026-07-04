import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        {children}

      </div>

      <Footer />

    </div>
  );
}

export default Layout;