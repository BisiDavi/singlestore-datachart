import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b h-20 bg-gray-300  flex items-center justify-center">
      <div className="container">
        <Logo />
      </div>
    </header>
  );
}
