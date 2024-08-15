import { ThemeSwitcher } from "../../../shared";
import { ClothCategory } from "../../../widgets/Landing/ClothCategory/ClothCategory";
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
  Footer,
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
      <ClothCategory />
      <Footer />
    </div>
  );
};
