"use client";
import Flex from "@/components/atoms/flex/flex";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import Button from "@/components/atoms/button/button";
import { useRouter } from "next/navigation";
import { navigateTo } from "@/app/page";

import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  const router = useRouter();

  const clickAction = () => {
    console.log("clicked!");
  };

  const routeAction = () => {
    navigateTo(router, "/examples");
  };
  return (
    <PageLayout>
      <Flex
        row
        margin={2}
        className={clsx(
          globalStyles["border-tone-alert"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        <Button onClick={clickAction} text="click me to trigger an action!" />
        <Button onClick={routeAction} text="click me to navigate to a route!" />
      </Flex>
    </PageLayout>
  );
}
