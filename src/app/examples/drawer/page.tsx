import Header from "@/components/molecules/header/header";
import Drawer from "@/components/organisms/drawer/drawer";
import PageLayout from "@/components/organisms/page-layout/page-layout";

export default function Page() {
  // TODO: make the drawer accept any kind of js not just goals
  return (
    <PageLayout>
      <Header
        size={3}
        text="the Drawer has marginTop and marginBottom spacing props ONLY - they both default to 2 - override requires passing in margin 0 or something weird"
      />
      <Drawer
        marginTop={0}
        title={"example drawer"}
        goals={[
          {
            id: "8a6e0804-0000-4672-b79d-d97027f9071b",
            createdAt: new Date("2025-01-01T13:11:00.741Z"),
            updatedAt: new Date("2025-01-23T13:11:00.741Z"),
            completedAt: null,
            archivedAt: null,
            deletedAt: null,
            title: "Finish This App!",
            info: "keep on chugging!",
            deadline: new Date("2025-12-31T23:59:59.741Z"),
            bucket: "year",
          },
        ]}
      />
    </PageLayout>
  );
}
