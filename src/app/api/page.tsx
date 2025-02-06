"use client";
import Button from "@/components/molecules/button/button";
import Header from "@/components/molecules/header/header";
import PageLayout from "@/components/organisms/page-layout/page-layout";
import { getRequest } from "@/util/requests";

export default function Page() {
  const apiPaths = [
    { path: "goals/create-table" },
    { path: "sub-goals/create-table" },
  ];

  return (
    <PageLayout>
      <Header
        size={3}
        text={`Here is a list of all the endpoints that my api has`}
      />
      {apiPaths.map((path) => (
        <Button
          key={path.path}
          text={`pages/api/${path.path}`}
          onClick={() => getRequest(path)}
        />
      ))}
    </PageLayout>
  );
}
