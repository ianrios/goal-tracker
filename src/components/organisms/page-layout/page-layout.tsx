import { navLinks } from "@/app/page";
import Flex, { HasChildren } from "@/components/atoms/flex/flex";
import Navbar from "@/components/molecules/navbar/navbar";
import globalStyles from "@/app/ui/global.module.css";
import clsx from "clsx";

export default function PageLayout({ children }: HasChildren) {
  return (
    <Flex
      col
      margin={3}
      padding={0}
      className={clsx(
        globalStyles["border-tone-alert"],
        globalStyles.border,
        globalStyles.borderRounded
      )}
    >
      <Navbar navLinks={navLinks} />
      {children}
    </Flex>
  );
}
