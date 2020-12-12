require("dotenv").config()

require("nextjs-sitemap-generator")({
  baseUrl: "https://quassummanus.com",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "public/",
  ignoredPaths: ["/api", "/github/authorizing"],
})

module.exports = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
}
