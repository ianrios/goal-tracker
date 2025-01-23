import Navbar from "@/components/molecules/navbar/navbar";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function page() {
  const exampleNavLinks = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "examples",
      route: "/examples",
    },
    {
      name: "navbar example",
      route: "/examples/navbar",
    },
  ];
  return (
    <PageLayout>
      <Navbar navLinks={exampleNavLinks} />
    </PageLayout>
  );
}
