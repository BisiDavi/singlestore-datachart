import HomepageBanner from "@/components/HomepageBanner";

export default function Page() {
  return (
    <section className="bg-zinc-400 p-8 rounded-md">
      <HomepageBanner />
      <div className="chart-wrapper w-3/5"></div>
    </section>
  );
}
