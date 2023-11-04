"use client"
import React, { useState, useEffect } from "react";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { GithubIcon } from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
					</NextLink>
				</NavbarBrand>
				{isSmallScreen ? (
					<>
						<NavbarMenuToggle
							aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
							className="lg:hidden"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
						{isMobileMenuOpen && (
							<NavbarMenu>
								{siteConfig.navItems.map((item) => (
									<NavbarMenuItem key={item.href}>
										<Link
											className={clsx(
												linkStyles({ color: "foreground" }),
												"data-[active=true]:text-primary data-[active=true]:font-medium"
											)}
											href={item.href}
										>
											{item.label}
										</Link>
									</NavbarMenuItem>
								))}
							</NavbarMenu>
						)}
					</>
				) : (
					<ul className="hidden lg:flex gap-4 justify-start ml-2">
						{siteConfig.navItems.map((item) => (
							<NavbarItem key={item.href}>
								<NextLink
									className={clsx(
										linkStyles({ color: "foreground" }),
										"data-[active=true]:text-primary data-[active=true]:font-medium"
									)}
									color="foreground"
									href={item.href}
								>
									{item.label}
								</NextLink>
							</NavbarItem>
						))}
					</ul>
				)}
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
				</NavbarItem>
			</NavbarContent>

			{!isSmallScreen && (
				<NavbarContent>

				</NavbarContent>
			)}

			{isSmallScreen && (
				<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
					<div className="flex gap-3">
						<Link
							isExternal
							as={NextLink}
							className={buttonStyles({ variant: "bordered", radius: "full" })}
							href={siteConfig.links.github}
						>
							<GithubIcon size={20} />
							GitHub
						</Link>
					</div>
				</NavbarContent>
			)}
		</NextUINavbar>
	);
};
