import Header from "@/components/molecules/header/header";
import Navbar from "@/components/molecules/navbar/navbar";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
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
      <Header
        size={3}
        margin={0}
        text="the navbar does not have bottom margin by default"
      />
      <Navbar navLinks={exampleNavLinks} />
    </PageLayout>
  );
}
