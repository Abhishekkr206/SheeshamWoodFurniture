// components/Layout.js
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
