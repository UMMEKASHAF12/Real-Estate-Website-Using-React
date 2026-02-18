import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { number: 100, label: "Satisfaction Clients", suffix: "%" },
    { number: 500, label: "Property Sales", suffix: "+" },
    { number: 150, label: "Countries & Cities", suffix: "+" },
    { number: 200, label: "Positive Reviews", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-10">
        {stats.map((item, i) => (
          <div key={i}>
            <h2 className="text-4xl font-heading font-semibold">
              <CountUp end={item.number} duration={3} />
              {item.suffix}
            </h2>
            <p className="mt-2 text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
