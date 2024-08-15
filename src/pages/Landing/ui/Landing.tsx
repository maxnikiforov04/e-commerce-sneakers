import { ThemeSwitcher, Header, Footer } from "../../../shared";
import { ClothCategory } from "../../../widgets/Landing/ClothCategory/ClothCategory";
import {
  Collections,
  Coupon,
  NewCollections,
  Slider,
  Sport,
  NewProducts,
  Description,
  OrangeCoupon,
} from "../../../widgets/Landing";

export const Landing = () => {
  return (
    <>
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
    </>
  );
};
