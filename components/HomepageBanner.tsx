import Button from "@/components/Button";
import ListDetails from "@/components/ListDetails";

export default function HomepageBanner() {
  return (
    <>
      <div className="text text-white font-bold my-6 w-2/5">
        <ListDetails type="heading" className="heading text-5xl mb-4" />
        <ListDetails type="text" />
        <Button
          text="Get Started"
          className="bg-red-500 text-white px-4 py-1 font-bold text-xl mt-6 hover:opacity-70"
          icon="→"
        />
      </div>
    </>
  );
}
