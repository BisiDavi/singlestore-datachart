import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <h1>Hello Dave</h1>
      {children}
    </main>
  );
}
