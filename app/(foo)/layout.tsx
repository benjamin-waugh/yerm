import DynamicBreadcrumb from "@/components/app/DynamicBreadcrumb";
import Header from "@/components/app/Header";

export default function TutorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col py-4 gap-4 max-w-6xl mx-auto w-full">
        <DynamicBreadcrumb />
        {children}
      </main>
    </>
  );
}
