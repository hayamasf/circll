import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation
      />
      <div className="lg:pl-72">
        <TopBar
        />
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
