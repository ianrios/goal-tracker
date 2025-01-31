"use client";
import clsx from "clsx";
import Flex, { HasClasses, HasTone, SpacingProps } from "../../atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import IconButton from "../icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";
import { useState } from "react";
import Dialog from "@/components/organisms/dialog/dialog";
import { Goal } from "@/app/lib/definitions";

type CardProps = Readonly<{
  header: Goal["header"];
  body: Goal["body"];
  goal?: Omit<Goal, "header" | "body">;
}>;

export default function Card(
  props: CardProps & HasClasses & HasTone & SpacingProps
) {
  const {
    header,
    body,
    goal,
    tone = "neutral",
    className,
    // Card gets defaulted to 2
    p = 2,
    ...restSpacingProps
  } = props;
  const borderTone = `border-tone-${tone}`;

  // TODO: pass in border tone to the flex

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <Flex
      col
      border
      p={p}
      gap={2}
      {...restSpacingProps}
      className={clsx(globalStyles[borderTone], className)}
    >
      {/* TODO: figure out header border */}
      {/* TODO: show bucket in header */}
      <Flex row>{header}</Flex>
      {/* body is optional */}
      {body && <Flex row>{body}</Flex>}

      <Flex row gap={1}>
        <IconButton
          name={IconName.Expand}
          p={1}
          onClick={() => setOpenDialog(true)}
        />
      </Flex>

      <Dialog
        goalId={goal?.id}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </Flex>
  );
}
