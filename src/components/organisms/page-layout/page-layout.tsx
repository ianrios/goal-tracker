import { navLinks } from "@/app/page";
import Flex, { HasChildren, HasGap } from "@/components/atoms/flex/flex";
import Navbar from "@/components/molecules/navbar/navbar";

type PageLayoutProps = HasChildren & HasGap;

export default function PageLayout({
  children,
  // PageLayout gets gap defaulted to 2
  gap = 2,
}: PageLayoutProps) {
  return (
    <Flex col gap={gap} mx={3} py={3} className="page-layout">
      <Navbar navLinks={navLinks} border />
      {children}
    </Flex>
  );
}
