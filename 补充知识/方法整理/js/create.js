function create(tageName,text){
	var node = document.createElement(tageName);
	var oText = document.createTextNode(text);
	node.appendChild(oText);
	console.log(1)
	return node;
}
document.body.appendChild(create("p","asdasdsadsad"))
