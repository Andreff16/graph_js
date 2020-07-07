let mx;
let active_nodes;

function node_click_handler()
{
	if (active_nodes[0] != null && active_nodes[1] != null)
	{
		clear_road();
		active_nodes[0].style.fill = "black";
		active_nodes[1].style.fill = "black";
		this.style.fill = "red";
		active_nodes[0] = this;
		active_nodes[1] = null;
	}
	else if (this.style.fill == "red")
	{
		clear_road();
		this.style.fill = "black";
		if (active_nodes[0] == this)
			active_nodes[0] = null;
		else
			active_nodes[1] = null;
	}
	else if ((active_nodes[0] == null || active_nodes[1] == null) && this.style.fill == "black")
	{
		this.style.fill = "red";
		if (active_nodes[0] == null)
			active_nodes[0] = this;
		else if (active_nodes[1] == null)
			active_nodes[1] = this;
		if (active_nodes[0] != null && active_nodes[1] != null)
			find_road(active_nodes);
	}
}

function draw_graph_handler()
{
	let i;
	let nodes;

	active_nodes = [null, null];
	clear_graph();
	mx = draw_graph(get_nodes_nbr());
	nodes = document.getElementsByClassName("svg_node");
	i = 0;
	while (i < nodes.length)
	{
		nodes[i].addEventListener("click", node_click_handler);
		i++;
	}
}

document.getElementById("draw_graph_btn").onclick = draw_graph_handler;
document.getElementById("nodes_nbr").oninput = function() {
    document.getElementById("nodes_nbr_show").innerHTML = this.value;
    document.getElementById("nodes_nbr_show").style.right = (202 - this.value * 1.45) + "px";
}
