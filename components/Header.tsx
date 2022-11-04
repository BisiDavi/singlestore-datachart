import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b h-20 bg-zinc-200  flex items-center justify-center shadow">
      <div className="container">
        <Logo />
      </div>
    </header>
  );
}
