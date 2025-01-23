"use client";
import { navigateTo } from "../page";
import Button from "@/components/atoms/button/button";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import { useRouter } from "next/navigation";

export default function Page() {
  const exampleRoutes = [
    "button",
    "card",
    "drawer",
    "flex",
    "icon",
    "icon-button",
    "navbar",
  ];

  const router = useRouter();

  return (
    <PageLayout>
      here is a list of all the helper files so that I can render out my design
      tokens with all the props applied
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
