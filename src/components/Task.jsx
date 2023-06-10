"use client"

import {GrEdit } from 'react-icons/gr'
import {MdDeleteForever } from 'react-icons/md'
import { deleteData } from '@/utils/sanity-service';
import { useRouter } from 'next/navigation';

export default function Task({id, name}) {
	const router = useRouter()
	
	const deleteTask = async () => {
		await deleteData(id)
		router.refresh()
	}

	const edit = (id) => {
		router.push("/new")
	}


	return (
		<li 
			key={id}
			className="flex justify-between items-center w-full gap-3 px-4 py-1 text-black bg-slate-500 text-2xl rounded-md hover:bg-slate-400 my-3"
		>
			{name} 
			<span className='flex gap-2 items-center justify-center'>
				<GrEdit size={16} onClick={edit}/>
				<MdDeleteForever size={18} onClick={deleteTask}/>	
			</span>
		</li>
	);
}