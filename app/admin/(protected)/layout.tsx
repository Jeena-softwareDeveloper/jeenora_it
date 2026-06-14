import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-6 border-b border-border bg-background/60 backdrop-blur">
          <h2 className="text-sm font-medium text-muted-foreground pl-10 lg:pl-0">
            Welcome back, <span className="text-foreground">{session.user?.name ?? 'Admin'}</span>
          </h2>
          <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-bold text-foreground">
            {(session.user?.name ?? 'A')[0].toUpperCase()}
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
