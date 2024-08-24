interface Error {
  name: string;
  message: string;
  stack?: string;
}

interface ErrorProp {
  error: Error;
}

export function Error5xx({error}:ErrorProp) {
  return (
    <div className="mx-auto flex flex-col max-w-6xl items-start gap-6 p-6 sm:p-8">
      <h1 className="text-red-400 text-[3rem]">Something Went Wrong</h1>
      <p className="text-red-400 text-[1.5rem]">{error.message}</p>
      <p className="text-red-400 text-[1.3rem]">The stack trace is:</p>
      <div className="max-w-6xl max-h-96 overflow-scroll p-4 bg-accent">
        <pre>{error.stack}</pre>
      </div>
      <p className="text-[1.3rem]">Copy the error above and send to admin if this error persist: <a href="mailto:aryaanjar123@gmail.com">aryaanjar123@gmail.com</a></p>
    </div>
  )
}
