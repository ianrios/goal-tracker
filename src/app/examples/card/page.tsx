import Card from "@/components/card/card";
import clsx from "clsx";
import styles from "@/app/ui/global.module.css";
import Flex from "@/components/flex/flex";

export default function Page() {
  return (
    <Flex col>
      <Flex>
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
      </Flex>
      <Flex>
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
      </Flex>
      <Flex>
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
        <Card
          className={clsx(
            styles["border-tone-alert"],
            styles.border,
            styles.borderRounded
          )}
          header="this is a card"
          body="there should be a lot of space for this kind of element"
          footer="perhaps this is where buttons could go"
        />
      </Flex>
    </Flex>
  );
}
