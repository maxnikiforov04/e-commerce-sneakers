interface CategoryProps {
  name: string;
  image: string;
  itemsQuant: string;
}

export default function SportCategory({
  name,
  image,
  itemsQuant,
}: CategoryProps) {
  return (
    <div>
      <div>
        <div className="cursor-pointer">
          <img src={image} alt={`category ${name}`} className="w-full " />
        </div>
        <div className="font-anton text-3xl">{name}</div>
        <div className="font-inter text-xl">{itemsQuant} items</div>
      </div>
    </div>
  );
}
