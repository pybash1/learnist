import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <CTA />
      <br />
      <Features />
      <Footer />
    </div>
  )
}
