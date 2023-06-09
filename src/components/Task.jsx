import {GrEdit } from 'react-icons/gr'
import {MdDeleteForever } from 'react-icons/md'

export default function Task({id, name}) {
	return (
		<li className="flex justify-between items-center w-full gap-3 px-4 py-1 text-black bg-slate-500 text-2xl rounded-md hover:bg-slate-400 my-3" id={id}>
			{name} 
			<span className='flex gap-2 items-center justify-center'>
				<GrEdit size={16} />
				<MdDeleteForever size={18} />
			</span>
		</li>
	);
}