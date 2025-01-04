import Approach from "@/components/Approach";
import Clients from "@/components/Client";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full overflow-clip">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experiences />
        <Grid />
        <RecentProject />
        <Clients />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
