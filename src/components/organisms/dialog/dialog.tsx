"use client";
import Flex, {
  FlexJustifyOptions,
  FlexOverflowOptions,
  isUndefined,
} from "@/components/atoms/flex/flex";
import { IconName } from "@/components/atoms/icon/icon";
import IconButton from "@/components/molecules/icon-button/icon-button";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import dialogStyles from "./dialog.module.css";
import globalStyles from "@/app/ui/global.module.css";
import Header from "@/components/molecules/header/header";
import { Goal } from "@/app/lib/definitions";
import { tempData, tempSubGoalData } from "@/util/temp-data";

type BaseDialogProps = Readonly<{
  goalId?: Goal["id"];
  open: boolean;
  onClose: () => void;
}>;

type DialogProps = BaseDialogProps;

export default function Dialog({ goalId, open, onClose }: DialogProps) {
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

  const goal = !isUndefined(goalId)
    ? tempData.find((g) => g.id === goalId)
    : undefined;

  const childGoalIds = (
    !isUndefined(goal)
      ? tempSubGoalData.filter((g) => g.parentGoalId === goal.id)
      : []
  ).map((childGoal) => childGoal.childGoalId);

  const childGoals = childGoalIds.flatMap((childGoalId) =>
    tempData.filter((goal) => goal.id === childGoalId)
  );

  // TODO: parent goal should only ever be an array of 1. throw an error if that is not the case
  const parentGoals = (
    !isUndefined(goal)
      ? tempSubGoalData.filter((g) => g.childGoalId === goal.id)
      : []
  ).map((parentGoal) => parentGoal.parentGoalId);

  if (parentGoals.length > 1 && !isUndefined(goal)) {
    throw Error(
      `parent goals array for child ${goal.id} has more than one goal. It is not possible to link a child goal to more than one parent`
    );
  }

  const parentGoalArray =
    parentGoals.length === 1
      ? tempData.filter((goal) => goal.id === parentGoals[0])
      : [];

  const parentGoal =
    parentGoalArray.length > 0 ? parentGoalArray[0] : undefined;

  const emptyMessage = `Could not find goal${
    isUndefined(goalId) ? ". Goal Id was undefined" : ` ${goalId}`
  }`;

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
      <Flex col gap={2} p={2} overflow={FlexOverflowOptions.OverflowHidden}>
        <Flex
          row
          gap={2}
          justify={
            isUndefined(goalId)
              ? FlexJustifyOptions.JustifyContentEnd
              : FlexJustifyOptions.JustifyContentStart
          }
        >
          <Header text={goal ? goal.header : emptyMessage} grow />
          <IconButton name={IconName.CloseLarge} onClick={onClose} />
        </Flex>
        {!isUndefined(goal) && (
          <Flex row gap={2}>
            <Flex col>put the deadline here</Flex>
            <Flex col>put the (1/12) progress bar here</Flex>
            <Flex col>put the action icons here</Flex>
          </Flex>
        )}

        {!isUndefined(goal) && (
          <>
            {goal.body.length > 0 ? (
              <Flex col>
                <Header size={3} text="Details" />
                {goal.body}
              </Flex>
            ) : (
              <Flex col>
                <Header size={3} text="No details in body" />
                Would you like to add some?
              </Flex>
            )}
            {parentGoal ? (
              <Flex col gap={2} mt={2}>
                <Header size={3} text="Parent Goal" />
                <Flex col border p={2}>
                  <Header size={4} text={parentGoal.header} />
                  <Flex row>{parentGoal.body}</Flex>
                  {/* TODO: add pop out button that closes this dialog and opens the other dialog for the parent goal */}
                </Flex>
              </Flex>
            ) : (
              <Flex col>
                <Header size={3} text="No Parent Goal" />
                Would you like to link one?
              </Flex>
            )}
            {childGoals.length > 0 ? (
              <Flex
                col
                overflow={FlexOverflowOptions.OverflowScroll}
                gap={2}
                mt={2}
              >
                <Header size={3} text="Child Goals" />
                {childGoals.map((childGoal) => (
                  <Flex key={childGoal.id} col border p={2}>
                    <Header size={4} text={childGoal.header} />
                    <Flex row>{childGoal.body}</Flex>
                    {/* TODO: add pop out button that closes this dialog and opens the other dialog for the child goal */}
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Flex col>
                <Header size={3} text="No Child Goals" />
                Would you like to add one?
              </Flex>
            )}
          </>
        )}
      </Flex>
    </dialog>
  );
}
