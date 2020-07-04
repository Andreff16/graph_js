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
			mx[i][j] = Math.floor(Math.random() * 10) % 2;
			j++;
		}
		i++;
	}
	// mx_show(mx);
	return (mx);
}

function draw_node(node)
{
	let html_node;

	html_node = document.createElement("span");
	html_node.className = "node";
	html_node.style.left = node.x + "px";
	html_node.style.bottom = node.y + "px";
	document.getElementById("map").appendChild(html_node);
}

function get_line_width(node1, node2)
{
	let a;
	let b;

	a = Math.pow(Math.abs(node1.x - node2.x), 2);
	b = Math.pow(Math.abs(node1.y - node2.y), 2);
	return (Math.sqrt(a + b));
}

function get_line_deg(node1, node2)
{
	let rad;

	rad = Math.atan((node2.y - node1.y) / (node1.x - node2.x))
	return ((rad * 180) / Math.PI);
}

function get_line_x(node1, node2)
{
	let w;
	let c;
	let g;

	w = get_line_width(node1, node2);
	c = Math.cos(get_line_deg(node1, node2) * Math.PI / 180);
	g = (w / 2) * c;
	return (Math.min(node1.x, node2.x) - ((w / 2) - g) + 5);
}

function draw_line(node1, node2)
{
	let line;

	line = document.createElement("hr");
	line.className = "map_road";
	line.style.width = get_line_width(node1, node2) + "px";
	line.style.left = get_line_x(node1, node2) + "px";
	line.style.bottom = (node1.y + 5 - (node1.y - node2.y) / 2) + "px";
	line.style.transform = "rotate(" + get_line_deg(node1, node2) + "deg)";
	document.getElementById("map").appendChild(line);
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
	let roads;
	let i;
	let l;

	nodes = document.getElementsByClassName("node");
	roads = document.getElementsByClassName("map_road");
	l = nodes.length;
	i = 0;
	while (i < l)
	{
		nodes[0].remove();
		i++;
	}
	l = roads.length;
	i = 0;
	while (i < l)
	{
		roads[0].remove();
		i++;
	}
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
