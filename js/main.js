function include(url) {
	let script;

	script = document.createElement("script");
	script.src = url;
	document.getElementsByTagName("body")[0].insertBefore(script, document.getElementById("main_script"));
}

include("js/draw_graph.js");
draw_graph(10);
