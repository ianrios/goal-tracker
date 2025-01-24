import Flex, {
  mBSelector,
  mLSelector,
  mRSelector,
  mSelector,
  mTSelector,
  mXSelector,
  mYSelector,
  pBSelector,
  pLSelector,
  pRSelector,
  pSelector,
  pTSelector,
  pXSelector,
  pYSelector,
} from "@/components/atoms/flex/flex";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  const simpleArray = Object.keys(mSelector);

  return (
    <PageLayout>
      <Flex row border mX={0} mY={2}>
        {/* most used */}
        <Flex col border p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={val as unknown as keyof typeof mSelector}
              p={0}
            >
              m{val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mX={0}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              p={val as unknown as keyof typeof pSelector}
            >
              p{val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={val as unknown as keyof typeof mSelector}
              p={val as unknown as keyof typeof pSelector}
            >
              m{val} p{val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex row border m={0}>
        {/* just X and Y used */}
        <Flex col border p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              mX={val as unknown as keyof typeof mXSelector}
              p={0}
            >
              mX {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mX={0}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              mY={val as unknown as keyof typeof mYSelector}
              p={0}
            >
              mY {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pY={val as unknown as keyof typeof pYSelector}
            >
              pY {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mR={0}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pX={val as unknown as keyof typeof pXSelector}
            >
              pX {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex row border mX={0} mY={2}>
        {/* just the p specific ones */}
        <Flex col border p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pL={val as unknown as keyof typeof pLSelector}
            >
              pL {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mX={0}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pR={val as unknown as keyof typeof pRSelector}
            >
              pR {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pT={val as unknown as keyof typeof pTSelector}
            >
              pT {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border p={2} mY={2} mR={0}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pB={val as unknown as keyof typeof pBSelector}
            >
              pB {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex row border mX={0} mB={2}>
        {/* just the m specific ones */}
        <Flex col border p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              mL={val as unknown as keyof typeof mLSelector}
            >
              mL {val}
            </Flex>
          ))}
        </Flex>
        <Flex border col p={2} mY={2} mX={0}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              mR={val as unknown as keyof typeof mRSelector}
            >
              mR {val}
            </Flex>
          ))}
        </Flex>
        <Flex border col p={2} mY={2} mX={2}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              mT={val as unknown as keyof typeof mTSelector}
            >
              mT {val}
            </Flex>
          ))}
        </Flex>
        <Flex border col p={2} mY={2} mR={0}>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              mB={val as unknown as keyof typeof mBSelector}
            >
              mB {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </PageLayout>
  );
}
