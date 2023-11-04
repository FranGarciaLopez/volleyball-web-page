import { title } from "@/components/primitives";
import Blog from "@/components/Blog";

export default function BlogPage() {
	return (
		<div className="parent-container">
			<div>
				<h1 className={title()}>Blog</h1>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
				<Blog />
				<Blog />
				<Blog />
			</div>
		</div>
	);
}

