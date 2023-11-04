import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: sky-blue)", color: "blue" },
	],
	icons: {
		icon: "/icon.png",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "sky-blue" }}>
					<div className="relative flex flex-col h-screen p-5">
						<Navbar />
						<main>
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<p className="text-center text-default-500">
								© {new Date().getFullYear()} {siteConfig.name}
							</p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
