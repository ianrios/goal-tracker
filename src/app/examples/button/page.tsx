"use client";
import Flex from "@/components/atoms/flex/flex";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import Button from "@/components/molecules/button/button";
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
        <Button
          margin={2}
          padding={2}
          onClick={clickAction}
          text="click me to trigger an action!"
        />
        <Button
          marginY={2}
          marginRight={2}
          padding={2}
          onClick={routeAction}
          text="click me to navigate to a route!"
        />
      </Flex>
    </PageLayout>
  );
}
