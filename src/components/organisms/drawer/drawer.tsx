"use client";
import Flex from "@/components/atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Goal } from "@/app/lib/definitions";
import Card from "@/components/molecules/card/card";
import IconButton from "@/components/molecules/icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";

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

export default function Drawer({ title, goals }: DrawerProps) {
  const [drawerExpanded, setDrawerExpanded] = useState<boolean>(true);
  return (
    <Flex
      col
      marginTop={2}
      marginX={2}
      paddingBottom={2}
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
          globalStyles.borderRounded
        )}
      >
        <IconButton
          onClick={() => setDrawerExpanded(!drawerExpanded)}
          name={drawerExpanded ? IconName.DownArrow : IconName.UpArrow}
        />
        <Card header={title} />
      </Flex>
      {drawerExpanded &&
        chunkArray(goals, 3).map((goalChunk, chunkIndex) => (
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
