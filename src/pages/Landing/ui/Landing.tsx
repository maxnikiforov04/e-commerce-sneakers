import { ThemeSwitcher } from "../../../shared";
import { Coupon, Header, Slider } from "../../../widgets/Landing";
import { NewProducts } from "../../../widgets/NewProducts";

export const Landing = () => {
  return (
    <div>
      <Header />
      <Coupon />
      <Slider />
      <NewProducts />
      <ThemeSwitcher />
    </div>
  );
};
