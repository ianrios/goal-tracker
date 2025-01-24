import Flex, {
  mBottomSelector,
  mLeftSelector,
  mRightSelector,
  mSelector,
  mTopSelector,
  mXSelector,
  mYSelector,
  pBottomSelector,
  pLeftSelector,
  pRightSelector,
  pSelector,
  pTopSelector,
  pXSelector,
  pYSelector,
} from "@/components/atoms/flex/flex";
import clsx from "clsx";
import globalStyles from "@/app/ui/global.module.css";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  const simpleArray = Object.keys(mSelector);

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
              margin={val as unknown as keyof typeof mSelector}
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
              padding={val as unknown as keyof typeof pSelector}
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
              margin={val as unknown as keyof typeof mSelector}
              padding={val as unknown as keyof typeof pSelector}
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
              marginX={val as unknown as keyof typeof mXSelector}
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
              marginY={val as unknown as keyof typeof mYSelector}
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
              paddingY={val as unknown as keyof typeof pYSelector}
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
              paddingX={val as unknown as keyof typeof pXSelector}
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
              paddingLeft={val as unknown as keyof typeof pLeftSelector}
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
              paddingRight={val as unknown as keyof typeof pRightSelector}
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
              paddingTop={val as unknown as keyof typeof pTopSelector}
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
              paddingBottom={val as unknown as keyof typeof pBottomSelector}
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
              marginLeft={val as unknown as keyof typeof mLeftSelector}
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
              marginRight={val as unknown as keyof typeof mRightSelector}
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
              marginTop={val as unknown as keyof typeof mTopSelector}
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
              marginBottom={val as unknown as keyof typeof mBottomSelector}
            >
              marginBottom {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </PageLayout>
  );
}
