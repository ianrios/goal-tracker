"use client";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import Flex from "@/components/atoms/flex/flex";
import Button from "@/components/atoms/button/button";
import { navigateTo } from "@/app/page";
import { useRouter } from "next/navigation";

type NavLink = Readonly<{
  route: string;
  name: string;
}>;

type NavbarProps = Readonly<{
  navLinks: NavLink[];
}>;

export default function Navbar({ navLinks }: NavbarProps) {
  const router = useRouter();
  return (
    <Flex
      row
      marginTop={2}
      marginX={2}
      padding={1}
      className={clsx(
        globalStyles["border-tone-alert"],
        globalStyles.border,
        globalStyles.borderRounded
      )}
    >
      {navLinks.map(({ name, route }) => (
        <Button
          key={`link-${name}-${route}`}
          text={name}
          onClick={() => navigateTo(router, route)}
        />
      ))}
    </Flex>
  );
}
