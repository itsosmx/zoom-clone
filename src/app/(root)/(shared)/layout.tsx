import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-dark-2">
      <Navbar />
      <section className="grid grid-cols-5 h-screen-2">
        <Sidebar />
        <div className="p-4 overflow-y-auto col-span-4 bg-dark-1 rounded-t-2xl">{children}</div>
      </section>
    </div>
  );
}
