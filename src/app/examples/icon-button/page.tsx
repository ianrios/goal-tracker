"use client";
import Flex from "@/components/atoms/flex/flex";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import { IconMap, IconName } from "@/components/atoms/icon/icon";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import IconButton from "@/components/molecules/icon-button/icon-button";

export default function Page() {
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
        {Object.keys(IconMap).map((icon) => (
          <Flex
            col
            key={icon}
            margin={2}
            className={clsx(
              globalStyles["border-tone-success"],
              globalStyles.border,
              globalStyles.borderRounded
            )}
          >
            <IconButton
              onClick={() => console.log(`clicked on ${icon}`)}
              name={icon as IconName}
            />
          </Flex>
        ))}
      </Flex>
    </PageLayout>
  );
}
