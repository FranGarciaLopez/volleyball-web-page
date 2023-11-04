'use client';
import React from "react";
import FullScreenImage from "../components/FullScreenImage";
import DataTable from "../components/dataTable";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import '../styles/animateOnScroll.css'

export default function Home() {
	const yourData = [
		{
			point: "🤝🏻 Team Spirit",
			description: "We're more than a team – we're a family that supports and uplifts each other!",
		},
		{
			point: "💥 Skill Development",
			description: "Improve your game with top-notch coaching and challenging opponents.",
		},
		{
			point: "🎉 Fun & Fitness",
			description: "Stay active and have a blast while playing the sport you love.",
		},
	];

	return (
		<section>
			<div>
				<FullScreenImage />
			</div>
			<div>
				<div className="flex flex-col items-center justify-center min-h-screen">
				<div className="card-element bg-blue-300 rounded-lg p-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl p-4 md:p-6 mt-6 mb-6 shadow-xl">


						<h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4">
							🏐 Welcome to Team Arena! 🏐
						</h1>
						<p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">
							Ready for some volleyball excitement? Join us at Arena, where teamwork meets thrill on the court! 🚀🏆
						</p>

						<h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">
							Why Join Arena:
						</h2>
						<div className="text-xs md:text-sm lg:text-base xl:text-lg flex justify-center mb-4">
							<DataTable data={yourData} />
						</div>

						<p className="text-sm md:text-base lg:text-lg xl:text-xl mt-4">
							Join Arena today and be part of an amazing journey that combines competition, camaraderie, and pure joy!
							Your volleyball adventure starts here. ⚡🏐
						</p>
						<div className="mt-4 flex justify-center">
							<Button className="bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg lg:text-xl xl:text-2xl" variant="solid">
								<NextLink href="/join-now">Join now</NextLink>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
