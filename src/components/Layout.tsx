import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-editor">
        {/* <SidebarTrigger className="fixed z-10 top-2 left-2" /> */}
        {children}
      </main>
    </SidebarProvider>
  )
}
