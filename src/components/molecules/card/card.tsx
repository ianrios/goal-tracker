"use client";
import clsx from "clsx";
import Flex, { HasClasses, SpacingProps } from "../../atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import { HasTone } from "../button/button";
import IconButton from "../icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";
import { useState } from "react";
import Dialog from "@/components/organisms/dialog/dialog";

export type ToneTypes = "info" | "neutral" | "alert" | "success";

type CardProps = Readonly<{
  header: string;
  body?: string;
}>;

export default function Card(
  props: CardProps & HasClasses & HasTone & SpacingProps
) {
  const {
    tone = "neutral",
    header,
    body,
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
      <Flex row>{header}</Flex>
      {/* body is optional */}
      {body && <Flex row>{body}</Flex>}

      <Flex row gap={1}>
        <IconButton
          name={IconName.CardText}
          p={1}
          onClick={() => setOpenDialog(true)}
        />
      </Flex>

      <Dialog
        open={openDialog}
        header={header}
        body={body}
        onClose={() => setOpenDialog(false)}
      />
    </Flex>
  );
}
