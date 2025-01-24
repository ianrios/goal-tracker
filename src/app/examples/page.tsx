"use client";
import { navigateTo } from "../page";
import Button from "@/components/molecules/button/button";
import Header from "@/components/molecules/header/header";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import { useRouter } from "next/navigation";

export default function Page() {
  const exampleRoutes = [
    "button",
    "card",
    "drawer",
    "flex",
    "header",
    "icon",
    "icon-button",
    "navbar",
  ];

  const router = useRouter();

  return (
    <PageLayout>
      <Header
        mX={0}
        mY={2}
        size={3}
        text={`here is a list of all the helper files so that I can render out my design
      tokens with all the props applied. the only one that does not have its own
      route is page-layout, which is still used on all pages`}
      />

      {exampleRoutes.map((route, index) => (
        <Button
          key={route}
          text={route}
          mT={index == 0 ? 0 : 2}
          mX={0}
          p={2}
          mB={index + 1 === exampleRoutes.length ? 2 : 0}
          onClick={() => navigateTo(router, `/examples/${route}`)}
        />
      ))}
    </PageLayout>
  );
}
