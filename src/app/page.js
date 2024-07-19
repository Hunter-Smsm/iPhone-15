import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Model from "@/components/Model";
import Features from "@/components/Features";

export default function Home() {
	return (
		<main className="bg-black" id="app">
			<Navbar />
			<Hero />
			<Highlights />
			<Model />
			<Features />
		</main>
	);
}