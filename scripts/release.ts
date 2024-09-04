import { release } from "@vitejs/release-scripts"
import { logRecentCommits, run } from "./releaseUtils"

release({
	// Name of the repo for CI link
	repo: "micro-frontend",
	// List of options. Choice will be available in following callback as `pkg`
	packages: ["main-app", "sub-app"],
	toTag: (pkg, version) =>
		pkg === "micro-frontend" ? `v${version}` : `${pkg}@${version}`,
	// Not shared until we find a new changelog process
	logChangelog: pkg => logRecentCommits(pkg),
	generateChangelog: async (pkgName, version) => {
		const changelogArgs = [
			"conventional-changelog",
			"-p",
			"angular",
			"-i",
			"CHANGELOG.md",
			"-s",
			"--commit-path",
			".",
		]
		if (pkgName !== "vite") changelogArgs.push("--lerna-package", pkgName)
		await run("npx", changelogArgs, { cwd: `packages/${pkgName}` })
	},
})
