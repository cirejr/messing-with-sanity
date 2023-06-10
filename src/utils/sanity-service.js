const { createClient } = require("next-sanity");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: false,
  apiVersion: "2023-06-04",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

async function getData() {
  const tasks = await client.fetch('*[_type == "task"]');
  return tasks;
}

const addData = async (data) => {
  await client.createOrReplace(data);
};

const deleteData = async (id) => {
  await client.delete({
    query: `*[_type == "task" && _id == "${id}"]`,
  });
};

export { deleteData, addData, getData };
