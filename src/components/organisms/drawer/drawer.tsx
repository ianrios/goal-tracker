"use client";
import Flex, { SpacingProps } from "@/components/atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Goal } from "@/app/lib/definitions";
import Card from "@/components/molecules/card/card";
import IconButton from "@/components/molecules/icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";
import Header from "@/components/molecules/header/header";
import flexStyles from "../../atoms/flex/flex.module.css";

// TODO: move to helper util
const chunkArray = (array: Goal[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

type DrawerProps = Readonly<{
  title: string;
  goals: Goal[];
}>;

export default function Drawer({
  title,
  goals,
  marginTop,
  marginBottom,
}: DrawerProps & Pick<SpacingProps, "marginTop" | "marginBottom">) {
  const [drawerExpanded, setDrawerExpanded] = useState<boolean>(true);
  return (
    <Flex
      col
      marginTop={marginTop ?? 2}
      marginX={2}
      paddingBottom={2}
      marginBottom={marginBottom ?? 2}
      className={clsx(
        globalStyles["border-tone-alert"],
        globalStyles.border,
        globalStyles.borderRounded
      )}
    >
      <Flex
        row
        marginTop={2}
        marginX={2}
        className={clsx(
          globalStyles["border-tone-info"],
          globalStyles.border,
          globalStyles.borderRounded,
          flexStyles["align-items-center"]
        )}
      >
        <IconButton
          marginLeft={2}
          padding={2}
          onClick={() => setDrawerExpanded(!drawerExpanded)}
          name={drawerExpanded ? IconName.DownArrow : IconName.UpArrow}
        />
        <Header text={title} size={2} />
      </Flex>
      {drawerExpanded &&
        chunkArray(goals, 4).map((goalChunk, chunkIndex) => (
          <Flex
            key={chunkIndex}
            row
            marginTop={2}
            marginX={2}
            className={clsx(
              globalStyles["border-tone-info"],
              globalStyles.border,
              globalStyles.borderRounded
            )}
          >
            {goalChunk.map((goal) => (
              <Card key={goal.id} header={goal.title} body={goal.info} />
            ))}
          </Flex>
        ))}
    </Flex>
  );
}
