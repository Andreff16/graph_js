let mx;

document.getElementById("draw_graph_btn").onclick = function()
{
	clear_graph();
	mx = draw_graph(get_nodes_nbr());
};
