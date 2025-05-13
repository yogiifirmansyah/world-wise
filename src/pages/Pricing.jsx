import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <PageNav />
      <div className="text-white flex gap-x-12 mx-auto mt-28 max-w-3xl items-center">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl font-bold">
            Simple pricing. <br /> Just $9/month.
          </h2>
          <p className="text-sm text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tempora debitis fugiat non vel tenetur incidunt voluptates iusto quaerat. Aliquid distinctio recusandae fuga numquam alias modi expedita repellendus
            perferendis magni?
          </p>
          <button className="mt-4 bg-green-500 max-w-max py-1 px-6 rounded-md text-slate-950 uppercase font-medium cursor-pointer hover:bg-green-600 transition-all duration-300">Start Tracking Now</button>
        </div>
        <img src="/img-2.jpg" alt="" className="max-w-72" />
      </div>
    </div>
  );
}

export default Pricing;
