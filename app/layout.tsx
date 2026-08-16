import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARMAN.GH — دنیای دیجیتال شخصی آرمان",
  description: "پلتفرم شخصی آرمان؛ بسکتبال، برنامه‌نویسی، مدرسه و مسیر آینده.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
