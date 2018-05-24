//getElementsbyClassName，获取节点兼容性写法
function elementByClassName(parent,classStr){
	var nodes = document.getElementsByTagName('*');
	var result = [];
	for(var i = 0;i<node.length;i++){
		if(node[i].className == classStr){
			result.push(node[i])
		}
		
	}
	return result;
}
