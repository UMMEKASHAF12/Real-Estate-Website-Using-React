import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    "What types of properties do you sell?",
    "How do I know if a property is a good investment?",
    "Do I need to hire a real estate agent?",
    "What's the process for buying a property?",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-heading mb-10">
          Frequently asked questions
        </h2>

        {faqs.map((q, i) => (
          <div key={i} className="border-b py-5">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left font-medium"
            >
              {q}
            </button>

            {open === i && (
              <p className="mt-4 text-gray-600">
                We offer residential, commercial and luxury properties tailored to your needs.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
