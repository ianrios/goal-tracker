import Card from "@/components/molecules/card/card";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import Flex from "@/components/atoms/flex/flex";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  return (
    <PageLayout>
      <Flex row>
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
      </Flex>
      <Flex row>
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
      </Flex>
      <Flex row>
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
      </Flex>
    </PageLayout>
  );
}
