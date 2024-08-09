import { ThemeSwitcher } from "../../../shared";
import {
  Collections,
  Coupon,
  Header,
  NewCollections,
  Slider,
  Sport,
} from "../../../widgets/Landing";
import { NewProducts } from "../../../widgets/NewProducts";

export const Landing = () => {
  return (
    <div>
      <Header />
      <Coupon />
      <Slider />
      <NewProducts />
      <Collections />
      <NewCollections />
      <Sport />
      <ThemeSwitcher />
    </div>
  );
};
