export function SortingBar() {
  return (
    <section className="ml-20 mr-20 mt-10">
      <div>
        <div className="flex gap-x-8 ">
          <select className="select select-bordered select-lg w-full max-w-xs rounded-none border-4 border-black">
            <option disabled selected>
              Gender
            </option>
            <option>man</option>
            <option>women</option>
            <option>unisex</option>
          </select>
          <select className="select select-bordered select-lg w-full max-w-xs rounded-none border-4 border-black">
            <option disabled selected>
              Category
            </option>
            <option>cloth</option>
            <option>shoes</option>
          </select>
          <select className="select select-bordered select-lg w-full max-w-xs rounded-none border-4 border-black">
            <option disabled selected>
              Price
            </option>
            <option>15$-20$</option>
          </select>
          <div>Color</div>
          <div>More filters</div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
