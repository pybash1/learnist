import Link from "next/link";

export default function PricingCard(props) {
  return (
    <article className="block p-6 text-center shadow-xl bg-neutral rounded-xl">
      <h5 className="text-3xl font-bold text-accent">{props.plan}</h5>

      <h6 className="mt-1 text-sm text-white">{props.description}</h6>

      <div className="mt-4 text-white">
        <h6>
          <span className="text-2xl">$</span>
          <span className="inline text-5xl font-bold">{props.price}</span>
          <span className="text-xs">/ {props.term === "m" ? "month" : "year"}</span>
        </h6>

        <p className="text-xs text-gray-700 mt-0.5">Billed Annually</p>
      </div>

      <ul className="mt-8 space-y-2.5 text-white">
        {props.features.map((feature, ind) => (
          <li key={ind}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link href={props.link}>
        <a className="inline-block px-8 py-3 mt-8 text-sm font-medium text-white transition bg-accent rounded hover:bg-accent/75 hover:shadow-xl active:bg-accent/75 focus:outline-none focus:ring">
          {props.button || "Get Started"}
        </a>
      </Link>
    </article>
  );
}
