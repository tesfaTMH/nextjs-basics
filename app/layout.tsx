import { ReactNode } from "react";
import "./globals.css";
import MainHeader from "./components/MainHeader";
import MainHeaderBackground from "./components/MainHeaderBackground";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground />
        <MainHeader />
        <main className="flex justify-center items-center my-20">
          {children}
        </main>
      </body>
    </html>
  );
}
