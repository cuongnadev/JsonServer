import fs from "fs";

const generateUsers = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

const generatePosts = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Post Title ${i + 1}`,
    content: "Lorem ipsum dolor sit amet.",
  }));

const data = {
  users: generateUsers(10),
  posts: generatePosts(5),
};

fs.writeFileSync("src/db/db.json", JSON.stringify(data, null, 2), "utf-8");
console.log("Data generated!");
