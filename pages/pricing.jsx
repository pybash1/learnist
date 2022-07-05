import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <h1 className="text-4xl text-white font-bold text-center p-10">Pricing</h1>
      <div className="px-96 py-10 grid grid-cols-2 gap-20">
        <PricingCard
          link="/onboarding?plan=0"
          plan="Free Plan"
          description="Best for students"
          price="0.00"
          features={["Class Management", "Homework Management", "Todos", "Dashboard"]}
          button="Try for Free"
        />
        <PricingCard
          link="/onboarding?plan=1"
          plan="Teacher's Plan"
          description="Best for teachers or institutions"
          price="5.99"
          features={["Everything in Free +", "Manage Students", "Manage Classes", "Manage Assignments"]}
          button="Get Started as a Teacher"
        />
      </div>
    </div>
  );
}
