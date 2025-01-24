"use client";
import Flex from "@/components/atoms/flex/flex";
import { IconMap, IconName } from "@/components/atoms/icon/icon";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import IconButton from "@/components/molecules/icon-button/icon-button";

export default function Page() {
  return (
    <PageLayout>
      <Flex row mT={2} border>
        {Object.keys(IconMap).map((icon) => (
          <IconButton
            key={icon}
            mY={2}
            mR={0}
            mL={2}
            p={2}
            onClick={() => console.log(`clicked on ${icon}`)}
            name={icon as IconName}
          />
        ))}
      </Flex>
    </PageLayout>
  );
}
