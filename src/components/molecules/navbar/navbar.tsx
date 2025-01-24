"use client";
import clsx from "clsx";
import Flex, { HasBorder, SpacingProps } from "@/components/atoms/flex/flex";
import Button from "@/components/molecules/button/button";
import { navigateTo } from "@/app/page";
import { useRouter } from "next/navigation";

type NavLink = Readonly<{
  route: string;
  name: string;
}>;

type BaseNavbarProps = Readonly<{
  navLinks: NavLink[];
}>;

type NavbarProps = BaseNavbarProps & SpacingProps & HasBorder;

export default function Navbar(props: NavbarProps) {
  const { navLinks, ...restSpacingProps } = props;
  const router = useRouter();

  return (
    <Flex row {...restSpacingProps} m={0} className={clsx("navbar")}>
      {navLinks.map(({ name, route }) => (
        <Button
          key={`link-${name}-${route}`}
          text={name}
          mY={2}
          mL={2}
          p={2}
          onClick={() => navigateTo(router, route)}
        />
      ))}
    </Flex>
  );
}
