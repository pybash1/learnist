import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <h1 className="text-4xl text-white font-bold text-center p-10">Pricing</h1>
      <div className="px-24 py-10 grid grid-cols-4 gap-10">
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
          plan="Basic Plan"
          description="Everything in Free +"
          price="2.99"
          features={["Google Calendar Integration", "Automatic Homework Assigment", "Teacher Discovery", "Timers"]}
          />
        <PricingCard
          link="/onboarding?plan=2"
          plan="Pro Plan"
          description="Everything in Basic +"
          price="4.99"
          features={["Outlook Calendar Integration", "No Upgrade Ads", "Class Discovery", "Note Taking"]}
          />
        <PricingCard
          link="/onboarding?plan=3"
          plan="Teacher's Plan"
          description="Best for teachers or institutions"
          price="5.99"
          features={["Everything in Pro +", "Manage Students", "Manage Classes", "Manage Assignments"]}
          button="Get Started as a Teacher"
        />
      </div>
    </div>
  );
}
