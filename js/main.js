function askname () {
  var optm = prompt('请问我应该怎么称呼你?');
   if(optm == null||optm =="")
    {
	var result = confirm("什么？你还没有输入？你确定要这么做吗？");
     if(result){//true
      alert('好吧，那么请允许我用null来称呼你。');
      } else {//false
      location.reload();
      }
    } else {
	  alert('好的，' + optm + '！');
	  }
}

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


<!--下面是弹出内容及遮罩效果-->
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

function noblog () 
{
	alert('啊啊啊，是这样的，您现在请求的页面来自我的博客，但我，我，我们真的非常抱歉，它已经被迫关闭了，真的，因为我的服务器已经莫得钱财续费了……怎么？想重新见到它？还不快考虑给我捐赠吧！')
}

<!--网站标题自动判断	设置-->
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

<!--加载栏-->
$(document).ready(function() {
	setTimeout(function() {
		$(".loading").hide();
	},
	1500);
});

<!--首页按钮-->
$(function(){
    $('.water-btn').click(function(e){
        var _this = $(this);
        var px = e.offsetX;
        var py = e.offsetY;

        var id=parseInt(Math.random()*1000);
        _this.append('<div class="water-btn-style" style="top:'+py+'px;left:'+px+'px;background:'+_this.attr('data-clickColor')+'" id="wb_'+id+'"></div>');
        setTimeout(function(){
            _this.find('#wb_'+id).remove()
        },3000)
    });
});

<!--移动端禁止长按菜单-->
document.oncontextmenu=function(e){

    e.preventDefault();

};
node.addEventListener('contextmenu', function(e){
    e.preventDefault();
  });
