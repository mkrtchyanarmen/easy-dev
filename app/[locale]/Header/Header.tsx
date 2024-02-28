import { getI18n } from "@/locales/server";
import NavLink from "./NavLink";
import SwitchLanguage from "./SwitchLanguage";

const Header = async () => {
  const t = await getI18n();
  return (
    <header className="w-screen h-16 fixed top-0 left-0 bg-red-800">
      {/* Logo */}
      <div></div>
      {/* NavLinks */}
      <div>
        <ul>
          <NavLink to="home">{t("header.links.home")}</NavLink>
          <NavLink to="about">{t("header.links.about")}</NavLink>
        </ul>
      </div>
      {/* Languages */}
      <div></div>
      <SwitchLanguage />
    </header>
  );
};

export default Header;
