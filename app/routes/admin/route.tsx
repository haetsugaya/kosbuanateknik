import type { MetaFunction } from "@remix-run/node";
import { isRouteErrorResponse, Outlet, useNavigation, useRouteError } from "@remix-run/react";
import { Error5xx } from "~/components/error-boundary-5xx";
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
        <div className="flex justify-between items-center px-6 h-full w-full min-h-[40px] max-h-[60px]">
          <p>Buana Teknis Reserved © 2024</p>
          <a href="https://mauweb.id">Made With ♥ by MAUWEB</a>
        </div>
      </main>
    </div>
  )
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <Error5xx error={error} />
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}