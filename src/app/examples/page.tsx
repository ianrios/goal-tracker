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
        size={3}
        text={`here is a list of all the helper files so that I can render out my design
      tokens with all the props applied. `}
      />
      <Header
        size={4}
        text={`The only one that does not have its own
      route is page-layout, which is still used on all pages and has defaulted gap={2}`}
      />
      {exampleRoutes.map((route) => (
        <Button
          key={route}
          text={route}
          onClick={() => navigateTo(router, `/examples/${route}`)}
        />
      ))}
    </PageLayout>
  );
}
