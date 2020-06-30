let drawGraphButton

drawGraphButton = document.getElementById("draw_graph");
drawGraphButton.onclick = function()
{
	draw_graph(10);
	clear_graph();
};
