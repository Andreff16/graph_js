function mx_show(mx)
{
	let i;

	i = 0;
	while (i < mx.length)
	{
		console.log(mx[i]);
		i++;
	}
}

function mx_fill(node_count)
{
	let mx;
	let i;
	let j;

	mx = new Array(node_count);
	i = 0;
	while (i < node_count)
	{
		mx[i] = new Array(node_count);
		j = 0;
		while (j < node_count)
		{
			mx[i][j] = (Math.floor(Math.random() * 10) % 5) == 0;
			j++;
		}
		i++;
	}
	return (mx);
}

function draw_node(node)
{
	let new_node;

	new_node = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	new_node.setAttributeNS(null, "r", "5px");
	new_node.setAttributeNS(null, "cx", node.x + "px");
	new_node.setAttributeNS(null, "cy", node.y + "px");
	new_node.setAttributeNS(null, "class", "svg_node");
	new_node.style.fill = "black";
	document.getElementById("svg_nodes").appendChild(new_node);
}

function draw_line(node1, node2)
{
	let new_line;

	new_line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	new_line.setAttributeNS(null, "x1", node1.x + "px");
	new_line.setAttributeNS(null, "y1", node1.y + "px");
	new_line.setAttributeNS(null, "x2", node2.x + "px");
	new_line.setAttributeNS(null, "y2", node2.y + "px");
	new_line.setAttributeNS(null, "stroke", "black");
	document.getElementById("svg_lines").appendChild(new_line);
}

function draw_graph(node_count)
{
	let i;
	let j;
	let nodes;
	let mx;

	mx = mx_fill(node_count);
	nodes = new Array(node_count);
	i = 0;
	while (i < node_count)
	{
		nodes[i] = {
			x: Math.floor(Math.random() * 10) * 50 + 45,
			y: Math.floor(Math.random() * 10) * 50 + 45
		}
		draw_node(nodes[i]);
		i++;
	}
	i = 0;
	while (i < node_count)
	{
		j = i + 1;
		while (j < node_count)
		{
			if (mx[i][j] > 0)
				draw_line(nodes[i], nodes[j]);
			j++;
		}
		i++;
	}
	return (mx);
}

function clear_graph()
{
	let nodes;
	let lines;

	clear_road();
	nodes = document.getElementById("svg_nodes");
	lines = document.getElementById("svg_lines");
	while (nodes.firstChild)
		nodes.removeChild(nodes.firstChild);
	while (lines.firstChild)
		lines.removeChild(lines.firstChild);
}

function get_nodes_nbr()
{
	let nbr;

	nbr = document.getElementById("nodes_nbr").value;
	if (nbr >= 100)
		return (100);
	else if (nbr > 0)
		return (nbr);
	else
		return (10);
}

function clear_road()
{
	let roads;

	roads = document.getElementById("svg_road");
	while (roads.firstChild)
		roads.removeChild(roads.firstChild);
}

function find_road(nodes)
{
	let node1 = {
		x: nodes[0].getAttribute("cx"),
		y: nodes[0].getAttribute("cy")
	};
	let node2 = {
		x: nodes[1].getAttribute("cx"),
		y: nodes[1].getAttribute("cy")
	};
	let new_line;

	new_line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	new_line.setAttributeNS(null, "x1", node1.x);
	new_line.setAttributeNS(null, "y1", node1.y);
	new_line.setAttributeNS(null, "x2", node2.x);
	new_line.setAttributeNS(null, "y2", node2.y);
	new_line.setAttributeNS(null, "stroke", "blue");
	new_line.setAttributeNS(null, "stroke-width", "3px");
	document.getElementById("svg_road").appendChild(new_line);
}
