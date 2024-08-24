import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { isRouteErrorResponse, json, useRouteError } from "@remix-run/react";
import { Error5xx } from "~/components/error-boundary-5xx";
import { LoginForm } from "~/components/login-card"


export const meta: MetaFunction = () => {
  return [
    { title: "Management Kos Buanateknik" },
  ];
};

export async function loader({
  params,
}: LoaderFunctionArgs) {

    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
    
}


export default function NotFoundAdmin() {
  return (
    <main className="bg-[hsl(var(--background))]">
      <div className="flex w-full min-h-screen justify-center items-center">
        <LoginForm></LoginForm>
      </div>
    </main>
  )
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          Admin 404
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