import Flex, {
  marginBottomSelector,
  marginLeftSelector,
  marginRightSelector,
  marginSelector,
  marginTopSelector,
  marginXSelector,
  marginYSelector,
  paddingBottomSelector,
  paddingLeftSelector,
  paddingRightSelector,
  paddingSelector,
  paddingTopSelector,
  paddingXSelector,
  paddingYSelector,
} from "@/components/atoms/flex/flex";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  const simpleArray = Object.keys(marginSelector);

  return (
    <PageLayout>
      <Flex
        row
        className={clsx(
          globalStyles["border-tone-alert"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        {/* most used */}
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={val as unknown as keyof typeof marginSelector}
              padding={0}
            >
              margin {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={0}
              padding={val as unknown as keyof typeof paddingSelector}
            >
              padding {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={val as unknown as keyof typeof marginSelector}
              padding={val as unknown as keyof typeof paddingSelector}
            >
              margin {val}
              padding {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        row
        className={clsx(
          globalStyles["border-tone-alert"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        {/* just X and Y used */}
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              marginX={val as unknown as keyof typeof marginXSelector}
              padding={0}
            >
              margin X {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              marginY={val as unknown as keyof typeof marginYSelector}
              padding={0}
            >
              margin Y {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={0}
              paddingY={val as unknown as keyof typeof paddingYSelector}
            >
              padding Y {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={0}
              paddingX={val as unknown as keyof typeof paddingXSelector}
            >
              padding X {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        row
        className={clsx(
          globalStyles["border-tone-alert"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        {/* just the padding specific ones */}
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={0}
              paddingLeft={val as unknown as keyof typeof paddingLeftSelector}
            >
              paddingLeft {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={0}
              paddingRight={val as unknown as keyof typeof paddingRightSelector}
            >
              paddingRight {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={0}
              paddingTop={val as unknown as keyof typeof paddingTopSelector}
            >
              paddingTop {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              margin={0}
              paddingBottom={
                val as unknown as keyof typeof paddingBottomSelector
              }
            >
              paddingBottom {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex
        row
        className={clsx(
          globalStyles["border-tone-alert"],
          globalStyles.border,
          globalStyles.borderRounded
        )}
      >
        {/* just the margin specific ones */}
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              padding={0}
              marginLeft={val as unknown as keyof typeof marginLeftSelector}
            >
              marginLeft {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              padding={0}
              marginRight={val as unknown as keyof typeof marginRightSelector}
            >
              marginRight {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              padding={0}
              marginTop={val as unknown as keyof typeof marginTopSelector}
            >
              marginTop {val}
            </Flex>
          ))}
        </Flex>
        <Flex
          padding={2}
          col
          className={clsx(
            globalStyles["border-tone-alert"],
            globalStyles.border,
            globalStyles.borderRounded
          )}
        >
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              className={clsx(
                globalStyles["border-tone-alert"],
                globalStyles.border,
                globalStyles.borderRounded
              )}
              padding={0}
              marginBottom={val as unknown as keyof typeof marginBottomSelector}
            >
              marginBottom {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </PageLayout>
  );
}
