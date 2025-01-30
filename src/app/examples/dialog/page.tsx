"use client";
import Flex from "@/components/atoms/flex/flex";
import Button from "@/components/molecules/button/button";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import Dialog from "@/components/organisms/dialog/dialog";
import { useState } from "react";

export default function Page() {
  const [openUndefinedGoalDialog, setOpenUndefinedGoalDialog] =
    useState<boolean>(false);
  const [openUnknownGoalDialog, setOpenUnknownGoalDialog] =
    useState<boolean>(false);
  const [openKnownGoalDialog, setOpenKnownGoalDialog] =
    useState<boolean>(false);

  const exampleUnknownId = "blah";
  const exampleKnownId = "8n6e0804-2b38-temp-b79d-d97027f9071a";

  return (
    <PageLayout>
      <Flex row gap={2}>
        <Button
          onClick={() => setOpenUndefinedGoalDialog(true)}
          text="open dialog with undefined goal"
        />
        <Button
          onClick={() => setOpenUnknownGoalDialog(true)}
          text="open dialog with incorrect goal"
        />
        <Button
          onClick={() => setOpenKnownGoalDialog(true)}
          text="open dialog with known goal"
        />
      </Flex>
      <Dialog
        open={openUndefinedGoalDialog}
        onClose={() => setOpenUndefinedGoalDialog(false)}
      />
      <Dialog
        goalId={exampleUnknownId}
        open={openUnknownGoalDialog}
        onClose={() => setOpenUnknownGoalDialog(false)}
      />
      <Dialog
        goalId={exampleKnownId}
        open={openKnownGoalDialog}
        onClose={() => setOpenKnownGoalDialog(false)}
      />
    </PageLayout>
  );
}
