
$('.menu a').click(function() {
	target = $(this).attr('goto');
	switchTo(target);
	$('.menu li a').each(function() {
		$(this).removeClass('active');
	});
	$(this).addClass('active');
});

function switchTo(target) {
	$('.right section').each(function() {
		$(this).removeClass('active');
	});
	$(target).addClass('active');
}

function turn() {$(bar).removeClass('active');}

/*
var name = "nope";//定义name全局变量
var ua = navigator.userAgent.toLowerCase();
//询问来访者名称
function whatname() {
	if (name == "nope") {
	if (ua.match(/QQ/i) == "qq") {
		name = "QQ用户"
		alert("你正在使用QQ访问，以至于我们无法弹出prompt框，所以请允许我用“QQ用户”来称呼你。");
	} else {
	askname();
	document.getElementById('name1').innerHTML = (name);
	document.getElementById('name2').innerHTML = (name);
	document.getElementById('name3').innerHTML = (name);
	}
	} else {alert("你又回来了" + name + "，欢迎！");}
}
function askname() {
	name = prompt("请问我应该怎么称呼你?");
if (name == "" || name == null || name == undefined) {
		result = confirm("什么？你还没有输入？你确定要这么做吗？");
		if (result) { //true
		name = "Anonymous";
			alert("好吧，那么请允许我用Anonymous来称呼你。");
		} else { //false
			askname();
		}
	} else {
		alert("好的，" + name + "！");}
	}
}
*/

//弹出内容及遮罩效果
function show()  //显示隐藏层和弹出层
{
   var hideobj=document.getElementById("hidebg");
   hidebg.style.display="block";  //显示隐藏层
   hidebg.style.height=document.body.clientHeight+"px";  //设置隐藏层的高度为当前页面高度
   document.getElementById("hidebox").style.display="block";  //显示弹出层
}
function hide()  //去除隐藏层和弹出层
{
   document.getElementById("hidebg").style.display="none";
   document.getElementById("hidebox").style.display="none";
}

//博客已关闭告示
function noblog () 
{
	alert('啊啊啊，是这样的，您现在请求的页面来自我的博客，但我，我，我们真的非常抱歉，它已经被迫关闭了，真的，因为我的服务器已经莫得钱财续费了……怎么？想重新见到它？还不快考虑给我捐赠吧！')
}

//网站标题自动判断设置
var title = document.title;
var icon = document.getElementById('changeicon').href;
	// window 失去焦点 
	window.onblur = function () {
		document.title = '(つ ェ ⊂)我藏好了哦~';
		document.getElementById('changeicon').href ='./warning.ico';
	};
	// window 获得焦点 
	window.onfocus = function () {
		document.title = '(*゜ロ゜)ノ被发现了~';
		document.getElementById('changeicon').href = icon;
		setTimeout( 'document.title = title', 1000 );
	}
	
//加载栏
window.onload = function() {
	setTimeout(function() {
		document.getElementById("loading").style.display = "none";
	},
	1000);
	bg('1s');//调用随机背景动画时间1秒
};

//随机壁纸
function bg(time) {
	picnum = parseInt(Math.random()*7+1);
	document.getElementById('viewbg').href = "./img/" + picnum + ".jpg";
	var bg = document.getElementById('bg');
	bg.style.opacity = "0";
	bg.style.animation = "fadeInBig 1s " + time + " linear forwards";//定义css动画样式
	bg.style.backgroundImage = "url(./img/" + picnum + ".jpg)";
	bg.addEventListener('animationend', bgEnd);//css动画结束
}
function bgEnd(e) {//css动画完成后清除样式
	var bg = document.getElementById('bg');
	bg.style.animation = "none";
	bg.style.opacity = "1";
}

//移动端禁止长按菜单
window.ontouchstart = function (e) { 
    e.preventDefault(); 
};

//F12提示
document.onkeydown = function () {
    if (window.event.keyCode == 123) {
		alert('咦？你按了F12耶？啊，不要，你想干什么？警告你！啊啊啊！不该看的东西不要看啊喂！啊！滚开！啊——');}
};

//调试窗口提示
if(window.console&&window.console.log){
console.group("看劳资代码的 \nヽ(*。>Д<)o゜ \n说你呢！站住！————");
console.error("%c呜呜呜，代码都给你看光了。。。你个大坏蛋！\n啊，气死我了！","color:#ff99ff");
console.warn("%c（项目地址：https://github.com/tototjc/tototjc.github.io/ \n 抱走时记得star）","color:#66ccff")
console.groupEnd(); 
}

//自定义右键菜单
window.oncontextmenu = function (e) {
	e.preventDefault(); //阻止浏览器默认鼠标右键菜单显示
    var menu = document.getElementById("right-menu");
    menu.style.display = "block"; //显示自定义鼠标右键菜单
    menu.style.left = event.clientX + "px";  //设置位置，跟随鼠标
    menu.style.top = event.clientY+"px";
}
window.onclick = function () { //点击窗口，鼠标右键菜单隐藏
    var menu = document.getElementById("right-menu");
    menu.style.display = "none";
}