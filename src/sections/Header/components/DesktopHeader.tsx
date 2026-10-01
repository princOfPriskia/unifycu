import { TopNavigation } from "@/sections/Header/components/TopNavigation";
import { MainNavigation } from "@/sections/Header/components/MainNavigation";

export const DesktopHeader = () => {
  return (
    <header className="box-border caret-transparent hidden outline-[3px] mt-[22px] md:block">
      <TopNavigation />
      <MainNavigation />
    </header>
  );
};
