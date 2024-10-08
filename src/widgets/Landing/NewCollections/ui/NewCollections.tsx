export const NewCollections = () => {
  return (
    <section className="lg:ml-20 lg:mr-20 mt-28 text-txtColor">
      <div className="font-anton text-6xl ">OUR NEW COLLECTION</div>
      <div className="lg:flex mt-20">
        <div className="lg:w-1/2">
          <div>
            <img
              src="/NewCollections/spaceJame.svg"
              alt=""
              className="lg:w-[95%] w-full"
            />
            <div className="mt-8">
              <div className="font-anton text-4xl">
                NIKE X SPACE JAME : A NEW LEGACY
              </div>
              <div className="font-inter text-xl mt-8 leading-8">
                To celebrate the release of Space Jam: A New Legacy, Nike and
                <br />
                Converse have joined forces to create an apparel and footwear
                <br />
                collection worthy of Bugs Bunny and LeBron.
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="ml-auto">
            <img
              src="/NewCollections/blackHistory.svg"
              alt=""
              className="lg:w-[95%] w-full lg:ml-auto "
            />
            <div className="w-[95%] lg:ml-auto mt-8">
              <div className="font-anton text-4xl">
                NIKE BLACK HISTORY MONTH
              </div>
              <div className="font-inter text-xl mt-8 leading-8">
                Nike is celebrating Black History Month with a new collection
                <br />
                highlighted by customizable Air Force 1 sneakers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
