import { createAuthHandler } from "next-tinacms-github"

console.log("GITHUB_CLIENT_ID", process.env.GITHUB_CLIENT_ID)
console.log("GITHUB_CLIENT_SECRET", process.env.GITHUB_CLIENT_SECRET)
console.log("SIGNING_KEY", process.env.SIGNING_KEY)

export default createAuthHandler(
  process.env.GITHUB_CLIENT_ID || "",
  process.env.GITHUB_CLIENT_SECRET || "",
  process.env.SIGNING_KEY || ""
)
