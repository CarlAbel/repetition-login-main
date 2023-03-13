
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function Layout() {
  
 



 
  

  return (
    <>
      <header className="bg-gray-800">
        <Navbar />
      </header>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
