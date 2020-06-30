function create_node(map, x, y)
{
	node = document.createElement("span");
	node.className = "node";
	node.style.left = x + "px";
	node.style.bottom = y + "px";
	map.appendChild(node);
}

function draw_graph(node_count)
{
	let node;
	let map;
	let i;

	map = document.getElementById("map");
	i = 0;
	while (i < node_count)
	{
		let x;
		let y;

		x = Math.floor(Math.random() * 450) + 10;
		y = Math.floor(Math.random() * 450) + 10;
		create_node(map, x, y);
		i++;
	}
}

function clear_graph()
{
	let nodes;
	let i;

	nodes = document.getElementsByClassName("node");
	i = 0;
	while (i < nodes.length)
	{
		nodes[i].remove();
		i++;
	}
}
