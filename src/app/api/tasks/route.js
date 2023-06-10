const { createClient } = require("next-sanity");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: false,
  apiVersion: "2023-06-04",
});

export async function GET(res) {
  try {
    const tasks = await client.fetch('*[_type == "task"]');
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch tasks." });
  }
}

export async function POST(req) {
  await client.create(req);
}
