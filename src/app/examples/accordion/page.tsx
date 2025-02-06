"use client";
import { Buckets } from "@/app/lib/definitions";
import Header from "@/components/molecules/header/header";
import Accordion from "@/components/organisms/accordion/accordion";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  // TODO: make the accordion accept any kind of js not just goals
  // or rename the accordion to a goals accordion or something
  // does it matter?
  return (
    <PageLayout>
      <Header
        size={3}
        text="the Accordion has mt, mx, pb, & mb props set to 2 but can be overridden"
      />
      <Accordion
        expanded
        title={"example accordion"}
        goals={[
          {
            id: "8a6e0804-0000-4672-b79d-d97027f9071b",
            createdAt: new Date("2025-01-01T13:11:00.741Z"),
            updatedAt: new Date("2025-01-23T13:11:00.741Z"),
            completedAt: null,
            archivedAt: null,
            deletedAt: null,
            header: "Finish This App!",
            body: "keep on chugging!",
            deadline: new Date("2025-12-31T23:59:59.741Z"),
            bucket: Buckets.Year,
          },
          {
            id: "8a6e0804-0000-4672-b79d-d97027f9071c",
            createdAt: new Date("2025-01-01T13:11:00.741Z"),
            updatedAt: new Date("2025-01-23T13:11:00.741Z"),
            completedAt: null,
            archivedAt: null,
            deletedAt: null,
            header: "update the styles",
            body: "nice!",
            deadline: new Date("2025-12-31T23:59:59.741Z"),
            bucket: Buckets.Year,
          },
        ]}
      />
    </PageLayout>
  );
}
