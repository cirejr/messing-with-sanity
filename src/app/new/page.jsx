"use client"

import { addData } from "@/utils/sanity-service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
	const [formData, setFormData] = useState({
		name : ""
	})

	const router = useRouter()

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const newDocument = {
			_type: "task",
			name : formData.name
		}

		await addData(newDocument)
		
		setTimeout(() => {
			router.push("/")
		}, 500);
	}

  return (
    <main className="p-5 w-full">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="text-4xl ">Create a new task</h1>
		<form onSubmit={handleSubmit} className="lg:w-1/2 w-full mt-5 flex flex-col items-center justify-center">
			<div className="flex flex-col gap-2 w-4/6 items-center">
				<label htmlFor="name" className="self-start">Task Name</label>
				<input 
					type="text"
					value={formData.name}
					onChange={(e) => setFormData({name:e.target.value})}
					className="rounded-md p-2 focus:outline-none outline-none focus:border focus:border-slate-400 bg-slate-200 text-black w-full" 
				/>
			</div>
			<div className="flex flex-col gap-2 w-4/6 items-center">
				<button className="rounded-md py-2 px-4 bg-slate-400 hover:bg-slate-600 mt-3 self-start" >
					Create task
				</button>
			</div>
		</form>
      </div>
    </main>
  );
}
