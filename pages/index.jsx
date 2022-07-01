import CTA from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <CTA />
      <br />
      <div id="features" className="flex flex-col items-center">
        <Features />
      </div>
      <div className="testimonials">
        <Testimonials />
      </div>
      <div className="flex flex-col items-center">
        <a
          className="inline-block px-12 py-3 text-sm font-medium text-white bg-accent border border-accent rounded active:text-indigo-500 hover:bg-accent/75 hover:border-accent/75 focus:outline-none focus:ring"
          href="https://tally.so/r/waQGpE"
          target="blank_"
          rel="noreferrer noopener"
        >
          Add Your Testimonial
        </a>
      </div>
      <Footer />
    </div>
  );
}
