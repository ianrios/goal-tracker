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
import { HasTone } from "@/components/molecules/button/button";

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

type DrawerProps = BaseDrawerProps & SpacingProps & HasTone;

export default function Drawer(props: DrawerProps) {
  const { title, tone, goals, ...restSpacingProps } = props;
  const [drawerExpanded, setDrawerExpanded] = useState<boolean>(true);
  return (
    <Flex col border tone={tone} gap={2} p={2} {...restSpacingProps}>
      <Flex
        row
        border
        tone={tone}
        gap={2}
        p={2}
        className={clsx(flexStyles["align-items-center"])}
      >
        <IconButton
          onClick={() => setDrawerExpanded(!drawerExpanded)}
          name={drawerExpanded ? IconName.DownArrow : IconName.UpArrow}
        />
        <Header text={title} size={2} />
      </Flex>
      {drawerExpanded &&
        chunkArray(goals, 4).map((goalChunk, chunkIndex) => (
          <Flex key={chunkIndex} row border tone={tone} gap={2} p={2}>
            {goalChunk.map((goal) => (
              <Card key={goal.id} header={goal.title} body={goal.info} />
            ))}
          </Flex>
        ))}
    </Flex>
  );
}
