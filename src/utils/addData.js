const { createClient } = require("next-sanity");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  useCdn: false,
  apiVersion: "2023-06-04",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const addData = async (data) => {
  await client.create(data);
};
