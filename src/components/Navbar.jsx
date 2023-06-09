"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import {usePathname} from "next/navigation"

export default function Navbar() {
	const [path, setPath] = useState("");
	const [buttonText, setButtonText] = useState("New task");
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.startsWith("/new")) {
			setButtonText("Cancel");
			setPath("/");
		} else {
			setButtonText("New task");
			setPath("/new");
		}
	}, [pathname]);


	return (
		<div className="h-32 w-screen lg:py-3 py-2 lg:px-16 px-4 flex justify-between items-center">
			<Link href="/" className="text-4xl font-bold">NexTask</Link>
			<Link href={path} className="rounded-md p-4 bg-slate-400 hover:bg-slate-600 ">{buttonText}</Link>
		</div>
	);
}