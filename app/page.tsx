import Button from "@/components/Button";

export default function Page() {
  return (
    <section className="bg-zinc-400 p-8 rounded-md">
      <div className="text text-white font-bold my-6 w-2/5">
        <div className="heading text-5xl mb-4">
          <h4>Create</h4>
          <h4>Your Chart</h4>
          <h4>In Few Minutes.</h4>
        </div>
        <h6>- Submit your google spreadsheet link or upload your excel file</h6>
        <h6>- Configure your chart variable</h6>
        <h6>
          - Visualize your data in Bar, Line, Pie, Doughnut, Polar Area, Radar,
          Scatter or Bubble chart{" "}
        </h6>
      </div>
      <Button
        text="Get Started"
        className="bg-red-500 text-white px-4 py-1 font-bold text-xl mt-2 hover:opacity-70"
        icon="→"
        // onClick={() => ""}
      />
      <div className="chart-wrapper w-3/5"></div>
    </section>
  );
}
