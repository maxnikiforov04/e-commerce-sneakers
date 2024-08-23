export function SortingBar() {
  return (
    <section>
      <div>
        <div>
          <select className="select select-bordered select-lg w-full max-w-xs">
            <option disabled selected>
              Gender
            </option>
            <option>man</option>
            <option>women</option>
            <option>unisex</option>
          </select>
          <select className="select select-bordered select-lg w-full max-w-xs">
            <option disabled selected>
              Category
            </option>
            <option>cloth</option>
            <option>shoes</option>
          </select>
          <div>Product type</div>
          <div>Size</div>
          <div>Price</div>
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
