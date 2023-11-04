import React from "react";

export default function AboutPage() {
	return (
		<div className="bg-gray-100 min-h-screen p-5">
			<article className="max-w-6xl mx-auto py-10">
				<h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="max-w-full md:max-w-xl">
						<p className="text-lg text-gray-700">
							We are a beach volleyball club located in Chania, Crete. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non urna eget ipsum aliquet ultricies.
						</p>
						<div className="mt-8 text-lg text-gray-700 text-center">
							<p className="mb-2">Address: Beach Volley Arena, Agioi Apostoloi, Chania, Crete</p>
							<p className="mb-2">Phone: +30 697 000 0000</p>
							<p className="mb-2">
								Email: <a href="mailto:frangalo34@gmail.com">frangalo34@gmail.com</a>
							</p>
							<p className="mb-2">
								Follow us:{" "}
								<a href="https://www.facebook.com/Beach-Volley-Arena-100630868659146/" target="_blank" rel="noopener noreferrer">
									Facebook
								</a>
								,{" "}
								<a href="https://www.instagram.com/beachvolleyarena/" target="_blank" rel="noopener noreferrer">
									Instagram
								</a>
							</p>
							<p>Opening Hours: 10:00 AM - 10:00 PM daily</p>
						</div>
					</div>
					<div className="max-w-full md:max-w-2xl">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400529.5675464185!2d-1.0821400659743707!3d38.34580532283178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62390babaaf559%3A0xecb5537fd6228273!2sClub%20V%C3%B3ley%20Playa%20Arena%20Alicante!5e0!3m2!1ses!2ses!4v1695585313189!5m2!1ses!2ses"
							width="100%"
							height="500"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</article>
		</div>
	);
}
