"use client";
import Flex from "@/components/atoms/flex/flex";
import { IconMap, IconName } from "@/components/atoms/icon/icon";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import IconButton from "@/components/molecules/icon-button/icon-button";
import Header from "@/components/molecules/header/header";
import { chunkArray } from "@/components/organisms/drawer/drawer";

export default function Page() {
  return (
    <PageLayout>
      <Header text="All Icons as buttons as IconButton components" />
      <Header size={3} text="All Default Icons (p=2)" />
      <Flex row border gap={2} p={2}>
        {Object.keys(IconMap).map((icon) => (
          <IconButton
            key={icon}
            onClick={() => console.log(`clicked on ${icon}`)}
            name={icon as IconName}
          />
        ))}
      </Flex>
      <Header size={3} text="All Icons with p=0" />
      <Flex row border gap={1} p={2}>
        {Object.keys(IconMap).map((icon) => (
          <IconButton
            key={icon}
            // TODO: add props to make the border be a circle
            p={0}
            onClick={() => console.log(`clicked on ${icon}`)}
            name={icon as IconName}
          />
        ))}
      </Flex>
      <Header size={3} text="All Icons with p=0 and border={false}" />
      <Flex row border gap={0} p={2}>
        {Object.keys(IconMap).map((icon) => (
          <IconButton
            key={icon}
            border={false}
            // TODO: add props to make the border be a circle
            p={0}
            onClick={() => console.log(`clicked on ${icon}`)}
            name={icon as IconName}
          />
        ))}
      </Flex>
      <Header size={3} text="All Icons with p=1 and border={false}" />
      <Flex row border gap={0} p={2}>
        {Object.keys(IconMap).map((icon) => (
          <IconButton
            key={icon}
            border={false}
            // TODO: add props to make the border be a circle
            p={1}
            onClick={() => console.log(`clicked on ${icon}`)}
            name={icon as IconName}
          />
        ))}
      </Flex>
      <Header size={3} text="All Default Icons with p=1" />
      <Flex row border gap={1} p={2}>
        {Object.keys(IconMap).map((icon) => (
          <IconButton
            key={icon}
            p={1}
            onClick={() => console.log(`clicked on ${icon}`)}
            name={icon as IconName}
          />
        ))}
      </Flex>
      <Header size={3} text="All Default Icons with p=1 and text" />
      <Flex row border gap={2} p={2}>
        {chunkArray(Object.keys(IconMap), 6).map((chunk, cIndex) => (
          <Flex col key={cIndex} gap={2}>
            {chunk.map((icon, index) => {
              const iconString = icon as unknown as IconName;
              const reverse = index % 2 === 0;
              return (
                <IconButton
                  key={iconString}
                  p={1}
                  reverse={reverse}
                  text={`${iconString}${reverse ? " reversed!" : ""}`}
                  onClick={() => console.log(`clicked on ${iconString}`)}
                  name={iconString}
                />
              );
            })}
          </Flex>
        ))}
      </Flex>
    </PageLayout>
  );
}
