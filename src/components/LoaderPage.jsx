function LoaderPage() {
  console.log("LoaderPage is rendering...");

  return (
    <div className="absolute z-[10000] w-full min-h-screen flex m-auto bg-slate-900">
      <div className="flex space-x-2 justify-center items-center m-auto">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default LoaderPage;
