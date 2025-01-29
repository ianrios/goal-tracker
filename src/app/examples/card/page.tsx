import Card from "@/components/molecules/card/card";
import Flex from "@/components/atoms/flex/flex";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  return (
    <PageLayout>
      <Flex row border gap={2} p={2}>
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
      <Flex row border gap={2} p={2}>
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
      <Flex row border gap={2} p={2}>
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
    </PageLayout>
  );
}
