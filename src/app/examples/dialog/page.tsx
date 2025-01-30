"use client";
import Flex from "@/components/atoms/flex/flex";
import Button from "@/components/molecules/button/button";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import Dialog from "@/components/organisms/dialog/dialog";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <PageLayout>
      <Flex row gap={2}>
        <Button onClick={() => setOpen(true)} text="open dialog" />
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          header="content here!"
          body="even more good stuff to come"
        />
      </Flex>
    </PageLayout>
  );
}
