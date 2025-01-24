import Card from "@/components/molecules/card/card";
import Flex from "@/components/atoms/flex/flex";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  return (
    <PageLayout>
      <Flex row m={0} mT={2} border>
        <Card
          m={2}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          mY={2}
          mX={0}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          m={2}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
      <Flex row m={0} mY={2} border>
        <Card
          m={2}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          mY={2}
          mX={0}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          m={2}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
      <Flex row m={0} border>
        <Card
          m={2}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          mY={2}
          mX={0}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          m={2}
          p={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
    </PageLayout>
  );
}
