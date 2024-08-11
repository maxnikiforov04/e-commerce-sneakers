import { ThemeSwitcher } from "../../../shared";
import {
  Collections,
  Coupon,
  Header,
  NewCollections,
  Slider,
  Sport,
  NewProducts,
  Description,
  OrangeCoupon,
} from "../../../widgets/Landing";

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
      <Description />
      <OrangeCoupon />
    </div>
  );
};
