var seach_window = document.getElementById('seach_window');
var oBox = document.getElementById("box");
var oBar = document.getElementById("bar");
startDrag(oBar, oBox);
function show_window(){
 	if(seach_window.style.display=='none'){
			seach_window.style.display='block';//
	}else{//如果show是显示的
			seach_window.style.display='none';//show的display属性设置为none（隐藏）
	}
}