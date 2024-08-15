interface ProductCard {
  imageUrl: string;
  name: string;
  price: number;
  category: string;
}

export const ProductCard = ({
  imageUrl,
  name,
  price,
  category,
}: ProductCard) => {
  return (
    <div className="w-full ">
      <div className="w-full h-[390px] flex items-center justify-center bg-productGrey cursor-pointer">
        <img src={imageUrl} alt="sneaker" />
      </div>
      <div className="font-inter text-2xl grid gap-2 mt-5">
        <div className="font-bold">{name}</div>
        <div className="text-gray-400">{category}</div>
        <div className="font-bold">{price}€</div>
      </div>
    </div>
  );
};
