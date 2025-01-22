import styles from "@/app/ui/global.module.css";
import Flex from "@/components/flex/flex";
import clsx from "clsx";
import Home from "./tabs/home";

export default function Page() {
  return (
    <Flex
      col
      className={clsx(
        styles["border-tone-success"],
        styles.border,
        styles.borderRounded
      )}
    >
      <Flex
        padding={4}
        className={clsx(
          styles["border-tone-alert"],
          styles.border,
          styles.borderRounded
        )}
        margin={2}
      >
        show the nav component here
      </Flex>
      <Home />
    </Flex>
  );
}
