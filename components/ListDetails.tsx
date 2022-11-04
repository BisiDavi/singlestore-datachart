import bannerData from "@/json//banner.json";

type listDetailsType = { type: "heading" | "text"; className?: string };

export default function ListDetails({ type, className }: listDetailsType) {
  return (
    <>
      {bannerData[type].map((item) => (
        <div className={className} key={item}>
          {type === "text" ? <h6>{item}</h6> : <h4>{item}</h4>}
        </div>
      ))}
    </>
  );
}
