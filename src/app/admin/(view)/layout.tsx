import AdminHeader from "@/components/admin-header";
import { AdminSidebar } from "@/components/admin-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 20)",
        } as React.CSSProperties
      }
    >
      <AdminSidebar variant="sidebar" />
      <SidebarInset>
        <AdminHeader />
        <div className="flex flex-1 flex-col bg-secondary">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
