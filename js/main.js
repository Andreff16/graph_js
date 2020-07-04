let drawGraphButton;
let mx;

drawGraphButton = document.getElementById("draw_graph_btn");
drawGraphButton.onclick = function()
{
	clear_graph();
	mx = draw_graph(get_nodes_nbr());
};
let node1 = {x: 45, y: 45};
let node2 = {x: 345, y: 195};
let node3 = {x: 450, y: 450};

draw_node(node1);
draw_node(node2);
draw_node(node3);
draw_line(node1, node2);
draw_line(node2, node3);
