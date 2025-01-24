import Header from "@/components/molecules/header/header";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  return (
    <PageLayout>
      <Header text={"default header"} />
      <Header size={1} text={"1"} />
      <Header size={2} text={"2"} />
      <Header size={3} text={"3"} />
      <Header size={4} text={"4"} />
      <Header size={5} text={"5"} />
      <Header size={6} text={"6"} />
    </PageLayout>
  );
}
