import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex"> 
        {/* Left */}
        <div className="w-[14%]">
          <Link href="/" className="flex items-center justify-left gap-1">
            <Image src="/steering_wheel.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block">SchoolPlat</span>
          </Link>
          <Menu/>
        </div>
        {/* Right */}
        <div className="w-[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar/>
          {children}
        </div>
      </div>
    );
  }