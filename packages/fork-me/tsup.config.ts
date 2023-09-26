import { defineConfig } from "tsup";
import reactUseClientPlugin from "esbuild-react18-useclient";
import ignoretestsPlugin from "esbuild-plugin-ignoretests";
import removeTestidPlugin from "esbuild-plugin-removetestid";

export default defineConfig(options => ({
	format: ["cjs", "esm"],
	target: "es2019",
	sourcemap: false,
	clean: true,
	bundle: true,
	minify: !options.watch,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call -- it's ok
	esbuildPlugins: [reactUseClientPlugin, ignoretestsPlugin(), removeTestidPlugin()],
	legacyOutput: true,
}));
