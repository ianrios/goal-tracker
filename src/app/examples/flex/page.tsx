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
      <Flex row border gap={2} p={2}>
        {/* most used */}
        <Flex col border>
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
        <Flex col border>
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
        <Flex col border>
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
      <Flex row border gap={2} p={2}>
        {/* just X and Y used */}
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              mx={val as unknown as keyof typeof mXSelector}
              p={0}
            >
              mx {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              my={val as unknown as keyof typeof mYSelector}
              p={0}
            >
              my {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              py={val as unknown as keyof typeof pYSelector}
            >
              py {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              px={val as unknown as keyof typeof pXSelector}
            >
              px {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex row border gap={2} p={2}>
        {/* just the p specific ones */}
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pl={val as unknown as keyof typeof pLSelector}
            >
              pl {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pr={val as unknown as keyof typeof pRSelector}
            >
              pr {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pt={val as unknown as keyof typeof pTSelector}
            >
              pt {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              m={0}
              pb={val as unknown as keyof typeof pBSelector}
            >
              pb {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex row border gap={2} p={2}>
        {/* just the m specific ones */}
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              ml={val as unknown as keyof typeof mLSelector}
            >
              ml {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              mr={val as unknown as keyof typeof mRSelector}
            >
              mr {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              mt={val as unknown as keyof typeof mTSelector}
            >
              mt {val}
            </Flex>
          ))}
        </Flex>
        <Flex col border>
          {simpleArray.map((val) => (
            <Flex
              key={val}
              row
              border
              p={0}
              mb={val as unknown as keyof typeof mBSelector}
            >
              mb {val}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </PageLayout>
  );
}
