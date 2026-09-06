require.config({

	deps: ["level13-app"],

	waitSeconds: 30,

	baseUrl: 'src',

	paths: {
		// build/level13-app.js holds every module under src/, each define given
		// its own name, so asking for level13-app brings the whole game in one
		// request instead of three hundred. Anything the bundle happens to miss
		// still resolves against src/ the old way. Rebuild with `node build.js`
		// after changing anything under src/.
		"level13-app": "../build/level13-app",

		brejep: "../lib/brejep",
		ash: "../lib/ash/ash.min",
		jquery: "../lib/jquery",
		lzstring: "../lib/lzstring",
        json: "../lib/requirejs/json",
		utils: "utils",
		game: "game",
	},

	config: {
		'level13-app': {
			'version': "0.6.3",
			'isDebugVersion': false,
			'isCheatsEnabled': false,
			'isDebugOutputEnabled': false,
			'isAutosaveEnabled': true,
			'isTrackingEnabled': false,
		}
	},
	
	urlArgs: "v=0.6.3.m116",

});
