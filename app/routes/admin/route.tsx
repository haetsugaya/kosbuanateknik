import type { MetaFunction } from "@remix-run/node";
import { Outlet, useNavigation } from "@remix-run/react";
import { HeaderMobile } from "~/components/header-mobile";
import { LoadingIndicator } from "~/components/loading-indicator";
import { SideBar } from "~/components/sidebar";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
  ];
};

export default function Dashboard() {
  const navigation = useNavigation();
  
  return (
    <div className="flex flex-col sm:flex-row">
      <SideBar />
      <HeaderMobile />
      <main className="flex max-w-[100vw] flex-col flex-1 justify-between sm:pl-14 min-h-screen">
        {navigation.state === 'loading' && <LoadingIndicator />}
        <Outlet />
        <div className="flex justify-between px-6 h-full w-full min-h-[40px] max-h-[60px]">
          <p>Buana Teknis Reserved © 2024</p>
          <a href="https://mauweb.id">Made With ♥ by MAUWEB</a>
        </div>
      </main>
    </div>
  )
}
