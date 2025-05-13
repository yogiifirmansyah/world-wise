import PageNav from "../components/PageNav";

function Product() {
  return (
    <div className="w-full min-h-screen bg-slate-900">
      <PageNav />
      <div className="text-white flex gap-x-12 mx-auto mt-28 max-w-3xl items-center">
        <img src="/img-1.jpg" alt="" className="max-w-72" />
        <div className="flex flex-col gap-y-4">
          <h2 className="text-2xl font-bold">About WorldWise.</h2>
          <p className="text-sm text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis tempora debitis fugiat non vel tenetur incidunt voluptates iusto quaerat. Aliquid distinctio recusandae fuga numquam alias modi expedita repellendus
            perferendis magni?
          </p>
          <p className="text-sm text-slate-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ut ullam quod? Molestias doloremque officiis, asperiores amet hic ea dolore illo, incidunt reprehenderit praesentium iste.</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
