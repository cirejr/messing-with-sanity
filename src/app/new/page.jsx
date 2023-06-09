"use client"

import { addData } from "@/utils/addData";
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
		
		router.push("/")
	}

  return (
    <main className="p-5 w-full">
      <div className="flex justify-center items-center flex-col w-full">
        <h1 className="text-4xl ">Create a new task</h1>
		<form onSubmit={handleSubmit} className="w-1/2 mt-5 items-center">
			<div className="flex flex-col gap-2">
				<label htmlFor="name">Task Name</label>
				<input 
					type="text"
					value={formData.name}
					onChange={(e) => setFormData({name:e.target.value})}
					className="rounded-md p-2 focus:outline-none outline-none focus:border focus:border-slate-400 bg-slate-200 text-black w-4/6" 
				/>
			</div>
			<button className="rounded-md p-4 bg-slate-400 hover:bg-slate-600 mt-3" >
				Create task
			</button>
		</form>
      </div>
    </main>
  );
}
