
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

//询问来访者名称
function askname() {
	var name = prompt('请问我应该怎么称呼你?');
	if (name == null || name == "") {
		var result = confirm("什么？你还没有输入？你确定要这么做吗？");
		if (result) { //true
			alert('好吧，那么请允许我用null来称呼你。');
		} else { //false
			location.reload();
		}
	} else {
		alert('好的，' + name + '！');
	}
	document.getElementById('name1').innerHTML = (name)
	document.getElementById('name2').innerHTML = (name)
	document.getElementById('name3').innerHTML = (name)
}

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
	// window 失去焦点 
	window.onblur = function () {
		document.title = '(つ ェ ⊂)我藏好了哦~';
	};
	// window 获得焦点 
	window.onfocus = function () {
		document.title = '(*゜ロ゜)ノ被发现了~';
		setTimeout( "document.title=title", 1000 );
	}

//加载栏
$(document).ready(function() {
	setTimeout(function() {
		$(".loading").hide();
	},
	1500);
});

//移动端禁止长按菜单
window.ontouchstart = function(e) { 
    e.preventDefault(); 
};

//禁用F12
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
		alert("F12已经被禁用了哦！怎么，要源码？直说就行了嘛，又不是不给你，但你也要取之有道啊。来，在我Github上就有这个网站的开源，拿走时记得star哦！");
        event.keyCode = 0;
        event.returnValue = false;
        return false;
    }
};

function pay(){
var ua = navigator.userAgent.toLowerCase();
if(ua.match(/MicroMessenger/i)=="micromessenger") {
return "Wechat";
document.getElementById('payto').href = ('wxp://f2f04IWg20LT8wxmoUEYPIvMotTT1xOpjwpF');
} else if (ua.match(/QQ/i) == "qq") {
return "QQ";
document.getElementById('payto').href = ('https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=CAEQg7muzgsYma_h7AU%3D_xxx_sign&u=3117128835&n=%E3%80%90The+setting+sun%E3%80%91%EF%BC%8Afar');
} else if (ua.match(/Alipay/i)=="alipay"){
return "Alipay";
document.getElementById('payto').href = ('https://qr.alipay.com/fkx07657pepwgzxc4s4rse5');
} else
document.getElementById("pay").style.display="none";
}

