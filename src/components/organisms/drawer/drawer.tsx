"use client";
import Flex, { HasTone, SpacingProps } from "@/components/atoms/flex/flex";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Goal } from "@/app/lib/definitions";
import Card from "@/components/molecules/card/card";
import IconButton from "@/components/molecules/icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";
import Header from "@/components/molecules/header/header";
import flexStyles from "../../atoms/flex/flex.module.css";

// TODO: move to helper util
export const chunkArray = (array: Goal[] | string[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

type BaseDrawerProps = Readonly<{
  title: string;
  goals: Goal[];
  expanded?: boolean;
}>;

type DrawerProps = BaseDrawerProps & SpacingProps & HasTone;

export default function Drawer(props: DrawerProps) {
  const { title, tone, expanded = false, goals, ...restSpacingProps } = props;
  const [drawerExpanded, setDrawerExpanded] = useState<boolean>(true);

  useEffect(() => {
    setDrawerExpanded(expanded);
    // only set the drawer expanded state on load of the drawer, not on every state change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            {goalChunk.map((goal) => {
              const knownGoal = goal as unknown as Goal;
              const { header, body, ...restGoal } = knownGoal;
              return (
                <Card
                  key={knownGoal.id}
                  header={header}
                  body={body}
                  goal={restGoal}
                />
              );
            })}
          </Flex>
        ))}
    </Flex>
  );
}
