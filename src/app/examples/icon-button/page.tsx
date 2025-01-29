"use client";
import Flex from "@/components/atoms/flex/flex";
import { IconMap, IconName } from "@/components/atoms/icon/icon";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import IconButton from "@/components/molecules/icon-button/icon-button";

export default function Page() {
  return (
    <PageLayout>
      <Flex row border gap={2} p={2}>
        {Object.keys(IconMap).map((icon) => (
          <IconButton
            key={icon}
            onClick={() => console.log(`clicked on ${icon}`)}
            name={icon as IconName}
          />
        ))}
      </Flex>
    </PageLayout>
  );
}
