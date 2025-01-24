"use client";
import Flex from "@/components/atoms/flex/flex";
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
      <Flex row m={0}>
        <Button
          mL={0}
          m={2}
          p={2}
          onClick={clickAction}
          text="click me to trigger an action!"
        />
        <Button
          mY={2}
          mR={2}
          p={2}
          onClick={routeAction}
          text="click me to navigate to a route!"
        />
      </Flex>
    </PageLayout>
  );
}
