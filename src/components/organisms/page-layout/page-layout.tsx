import { navLinks } from "@/app/page";
import Flex, { HasChildren } from "@/components/atoms/flex/flex";
import Navbar from "@/components/molecules/navbar/navbar";

export default function PageLayout({ children }: HasChildren) {
  return (
    <Flex col m={3} p={0} className="page-layout">
      <Navbar m={0} navLinks={navLinks} border />
      {children}
    </Flex>
  );
}
