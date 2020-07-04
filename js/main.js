let drawGraphButton;
let mx;

drawGraphButton = document.getElementById("draw_graph_btn");
drawGraphButton.onclick = function()
{
	clear_graph();
	mx = draw_graph(get_nodes_nbr());
};
