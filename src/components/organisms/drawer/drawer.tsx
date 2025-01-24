"use client";
import Flex, { SpacingProps } from "@/components/atoms/flex/flex";
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

type BaseDrawerProps = Readonly<{
  title: string;
  goals: Goal[];
}>;

type DrawerProps = BaseDrawerProps & SpacingProps;

export default function Drawer(props: DrawerProps) {
  const { title, goals, ...restSpacingProps } = props;
  const [drawerExpanded, setDrawerExpanded] = useState<boolean>(true);
  return (
    <Flex
      col
      // TODO: do this override better
      mT={restSpacingProps.mT ?? 2}
      mX={restSpacingProps.mX ?? 2}
      pB={restSpacingProps.pB ?? 2}
      mB={restSpacingProps.mB ?? 2}
      border
    >
      <Flex
        row
        mT={2}
        mX={2}
        border
        className={clsx(flexStyles["align-items-center"])}
      >
        <IconButton
          mL={2}
          p={2}
          onClick={() => setDrawerExpanded(!drawerExpanded)}
          name={drawerExpanded ? IconName.DownArrow : IconName.UpArrow}
        />
        <Header text={title} size={2} />
      </Flex>
      {drawerExpanded &&
        chunkArray(goals, 4).map((goalChunk, chunkIndex) => (
          <Flex key={chunkIndex} row mT={2} mX={2} border>
            {goalChunk.map((goal) => (
              <Card key={goal.id} header={goal.title} body={goal.info} />
            ))}
          </Flex>
        ))}
    </Flex>
  );
}
