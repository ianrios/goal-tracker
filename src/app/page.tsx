"use client";
import Home from "./tabs/home";
import { useRouter } from "next/navigation";
import PageLayout from "@/components/organisms/page-layout/page-layout";

// TODO: move this util constant somewhere else

export const navLinks = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "examples",
    route: "/examples",
  },
];

// TODO: move this util function somewhere else
export const navigateTo = (
  router: ReturnType<typeof useRouter>,
  route: string
) => {
  router.push(route);
};

export default function Page() {
  // TODO: use all context wrappers here
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
}
