import Flex from "@/components/atoms/flex/flex";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import Icon, { IconMap, IconName } from "@/components/atoms/icon/icon";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import Header from "@/components/molecules/header/header";
import flexStyles from "@/components/atoms/flex/flex.module.css";
import { IconFlex } from "@/components/molecules/icon-flex/icon-flex";

export default function Page() {
  return (
    <PageLayout>
      <Flex
        row
        margin={2}
        className={clsx(
          globalStyles["border-tone-alert"],
          globalStyles.border,
          globalStyles.borderRounded,
          flexStyles["align-items-center"]
        )}
      >
        <Header size={4} text="Icons as is" />
        {Object.keys(IconMap).map((icon) => (
          <Icon key={icon} name={icon as IconName} />
        ))}
      </Flex>
      <Flex
        row
        margin={2}
        className={clsx(
          globalStyles["border-tone-alert"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        <Header size={4} text="IconFlex components" />
        {Object.keys(IconMap).map((icon) => (
          <IconFlex margin={2} padding={1} key={icon} name={icon as IconName} />
        ))}
      </Flex>
    </PageLayout>
  );
}
