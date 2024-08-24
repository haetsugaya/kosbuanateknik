import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { LoginForm } from "~/components/login-card"


export const meta: MetaFunction = () => {
  return [
    { title: "Management Kos Buanateknik" },
  ];
};

export default function Admin() {
  return (
    <main className="bg-[hsl(var(--background))]">
      <div className="flex w-full min-h-screen justify-center items-center">
        <LoginForm></LoginForm>
      </div>
    </main>
  )
}
