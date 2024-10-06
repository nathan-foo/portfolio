import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata = {
    title: "Nathan Foo",
    description: "Computer Science student at UT Austin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
          {children}
      </body>
    </html>
  );
}
