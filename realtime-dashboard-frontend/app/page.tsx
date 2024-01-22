import { Dashboard } from "@/components/Dashboard";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <main className="flex items-center bg-[#1d232a] h-full">
      <SideBar />
      <Dashboard />
    </main>
  );
}
