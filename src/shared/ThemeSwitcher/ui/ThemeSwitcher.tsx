import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks.ts";
import { themeSwitch } from "../../../app/reducers/ProductSlice.ts";

export const ThemeSwitcher = () => {
  const { theme } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  return (
    <div className=" cursor-pointer absolute right-14 bottom-14">
      {theme === true ? (
        <div
          className=" w-12 h-12 rounded-2xl bg-white"
          onClick={() => dispatch(themeSwitch())}
        >
          <img src="/Theme/moon.svg" alt="light" />
        </div>
      ) : (
        <div
          className=" w-12 h-12 rounded-2xl bg-blue-950 "
          onClick={() => dispatch(themeSwitch())}
        >
          <img src="/Theme/sun.svg" alt="dark" />
        </div>
      )}
    </div>
  );
};
