import { getData } from "@/utils/sanity-service";
import Task from "./Task";

const Tasks = async () => {
	const tasks = await getData()
	return (
		<div className="p-4 w-1/2">
			{tasks && tasks.length> 0 ? (
				<ul className="w-full">
					{tasks.map(task => <Task id={task._id} name={task.name} />)}
				</ul>
			) : ( <div> No tasks to display </div>) }
		</div>
	);
}

export default Tasks;