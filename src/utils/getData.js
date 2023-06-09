const { createClient } = require("next-sanity");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: false,
  apiVersion: "2023-06-04",
});

export default async function getData() {
  const tasks = await client.fetch('*[_type == "task"]');

  return tasks;
}
