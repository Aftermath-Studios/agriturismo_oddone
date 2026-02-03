import type { Metadata, Viewport } from "next";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { rowanFont } from "./fonts";

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	colorScheme: 'dark'
}

export const metadata: Metadata = {
	title: "Agriturismo Oddone",
	description: "Website for Agriturismo Oddone."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="it">
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
			</head>
			<body className={`${rowanFont.variable} font-rowan antialiased`}>
				<Header />
				<main className="site-content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
