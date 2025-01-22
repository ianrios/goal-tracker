import Flex from "@/components/flex/flex";
import clsx from "clsx";
import styles from "@/app/ui/global.module.css";
import Icon, { IconMap } from "@/components/icon/icon";

export default function Page() {
  return (
    <Flex
      margin={2}
      className={clsx(
        styles["border-tone-alert"],
        styles.border,
        styles.borderRounded
      )}
    >
      {Object.keys(IconMap).map((icon) => (
        <Flex
          key={icon}
          margin={2}
          className={clsx(
            styles["border-tone-neutral"],
            styles.border,
            styles.borderRounded
          )}
        >
          <Icon name={icon as keyof typeof IconMap} />
        </Flex>
      ))}
    </Flex>
  );
}
