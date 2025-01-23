import Flex from "@/components/atoms/flex/flex";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import Icon, { IconMap, IconName } from "@/components/atoms/icon/icon";
import PageLayout from "@/components/organisms/page-layout/page-layout";

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
              globalStyles["border-tone-neutral"],
              globalStyles.border,
              globalStyles.borderRounded
            )}
          >
            <Icon name={icon as IconName} />
          </Flex>
        ))}
      </Flex>
    </PageLayout>
  );
}
