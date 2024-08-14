export const ClothCategory = () => {
  return (
    <section className=" text-greytxt">
      <div className="flex justify-between font-inter text-2xl mr-20 ml-20 mt-28 mb-28">
        <div className="leading-loose">
          <div className="font-anton text-4xl text-txtColor">SHOES</div>
          <div className="category cursor-pointer">Golf Shoes</div>
          <div className="category cursor-pointer">Winter Trainers</div>
          <div className="category cursor-pointer">Gore Tex Trainers</div>
          <div className="category cursor-pointer">Walking Trainers</div>
        </div>
        <div className="leading-loose">
          <div className="font-anton text-4xl text-txtColor">CLOTHING</div>
          <div className="category cursor-pointer">All Clothing</div>
          <div className="category cursor-pointer">Yoga Trousers</div>
          <div className="category cursor-pointer">Tech Fleece Joggers</div>
          <div className="category cursor-pointer">Tech Fleece Pants</div>
        </div>
        <div className="leading-loose">
          <div className="font-anton text-4xl text-txtColor">KIDS</div>
          <div className="category cursor-pointer">Kids’ Sliders</div>
          <div className="category cursor-pointer">Kids’ Tracksuit Sale</div>
          <div className="category cursor-pointer">Kids’ Puffer Jacket</div>
        </div>
        <div className="leading-loose">
          <div className="font-anton text-4xl text-txtColor">FEATURED</div>
          <div className="category cursor-pointer">Football Club Teams</div>
          <div className="category cursor-pointer">Football</div>
          <div className="category cursor-pointer">Nike Run Club</div>
          <div className="category cursor-pointer">Nike Training Club</div>
        </div>
      </div>
    </section>
  );
};
