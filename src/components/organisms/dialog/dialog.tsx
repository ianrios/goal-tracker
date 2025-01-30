"use client";
import Flex from "@/components/atoms/flex/flex";
import { IconName } from "@/components/atoms/icon/icon";
import IconButton from "@/components/molecules/icon-button/icon-button";
import clsx from "clsx";
import { ReactNode, useEffect, useRef } from "react";
import dialogStyles from "./dialog.module.css";
import globalStyles from "@/app/ui/global.module.css";
import Header from "@/components/molecules/header/header";

type BaseDialogProps = Readonly<{
  open: boolean;
  onClose: () => void;
  header: string;
  body?: ReactNode;
}>;

type DialogProps = BaseDialogProps;

export default function Dialog({ open, onClose, header, body }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);

    if (open) dialog.showModal();
    if (!open) dialog.close();

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [open, onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={clsx([
        dialogStyles.dialog,
        globalStyles.border,
        globalStyles.borderRounded,
        globalStyles["border-tone-neutral"],
      ])}
    >
      <Flex col gap={2} p={2}>
        <Flex row gap={2}>
          <Header text={header} grow />
          <IconButton name={IconName.CloseLarge} onClick={onClose} />
        </Flex>
        {body && <Flex row>{body}</Flex>}
      </Flex>
    </dialog>
  );
}
