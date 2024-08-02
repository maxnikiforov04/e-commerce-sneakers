import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks.ts";
import { themeSwitch } from "../../../app/reducers/ProductSlice.ts";

export const ThemeSwitcher = () => {
  const { theme } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  return (
    <div className=" cursor-pointer fixed max-w-max ml-auto mr-20 bottom-14 z-10">
      <div className="">
        {theme === true ? (
          <div className=" w-12 h-12" onClick={() => dispatch(themeSwitch())}>
            <img src="/Theme/moon.svg" alt="light" />
          </div>
        ) : (
          <div className=" w-12 h-12 " onClick={() => dispatch(themeSwitch())}>
            <img src="/Theme/sun.svg" alt="dark" />
          </div>
        )}
      </div>
    </div>
  );
};
