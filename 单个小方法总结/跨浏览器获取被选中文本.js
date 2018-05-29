//跨浏览器获取被选中文本
function getSelectText(text){
if(typeof text.selectionStart=='number'){
return text.value.substring(text.selectionStart,text.selectionEnd);
}else if(document.selection){
return document.selection.createRange().text;
}
}