import "./globals.css";

export const metadata = {
  title: "Putih Services — Servis & Pemasangan Aircond",
  description:
    "Putih Services: servis, pemasangan dan baiki aircond. Harga telus, janji sampai dalam 24 jam. Tempah slot melalui WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms">
      <body>{children}</body>
    </html>
  );
}
