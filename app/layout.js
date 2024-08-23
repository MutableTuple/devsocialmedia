import { Mulish, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const mulish = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const metadata = {
  title: "Code Snippets",
  description: "Scroll through code snippets and fact and get smarter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} bg-stone-100`}>
        <div className="">
          <div className="max-w-[1140px] mx-auto ">{children}</div>
        </div>
      </body>
    </html>
  );
}
