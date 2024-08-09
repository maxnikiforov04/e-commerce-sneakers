export const Collections = () => {
  return (
    <section className="ml-20 mr-20 mt-28">
      <div className="font-anton text-6xl">SHOP BY COLLECTION</div>
      <div className="flex flex-wrap mt-20 h-[800px] font-anton text-4xl">
        <div className="w-1/3 bg-womens bg-no-repeat bg-cover flex justify-center items-end">
          <button className="bg-white border p-5 mb-12">WOMENS</button>
        </div>
        <div className="w-1/3 bg-mens bg-no-repeat bg-cover flex justify-center items-end">
          <button className="bg-white border p-5 mb-12">MENS</button>
        </div>
        <div className="w-1/3 bg-kids bg-no-repeat bg-cover flex justify-center items-end">
          <button className="bg-white border p-5 mb-12">KIDS</button>
        </div>
      </div>
    </section>
  );
};
