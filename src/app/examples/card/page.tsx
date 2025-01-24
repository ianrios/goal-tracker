import Card from "@/components/molecules/card/card";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import Flex from "@/components/atoms/flex/flex";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  return (
    <PageLayout>
      <Flex
        row
        marginTop={2}
        marginX={2}
        className={clsx(
          globalStyles["border-tone-success"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        <Card
          marginY={2}
          marginLeft={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          marginY={2}
          marginLeft={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          margin={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
      <Flex
        row
        marginTop={2}
        marginX={2}
        className={clsx(
          globalStyles["border-tone-success"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        <Card
          marginY={2}
          marginLeft={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          marginY={2}
          marginLeft={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          margin={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
      <Flex
        row
        margin={2}
        className={clsx(
          globalStyles["border-tone-success"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        <Card
          marginY={2}
          marginLeft={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          marginY={2}
          marginLeft={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
        <Card
          margin={2}
          padding={2}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
        />
      </Flex>
    </PageLayout>
  );
}
