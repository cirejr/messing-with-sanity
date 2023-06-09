import Tasks from "@/components/Tasks";

export default async function Page() {
  return (
    <main className="p-5 w-full">
      <div className="flex justify-center items-center flex-col w-full">
        <div className="w-full flex items-center justify-center flex-col gap-3 mt-6">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-800 to-indigo-600 text-4xl font-semibold ">
            Task List
          </h1>
          <Tasks />
        </div>
      </div>
    </main>
  );
}
