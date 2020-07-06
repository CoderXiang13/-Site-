// banner
var i = 1;
			
				function banner() {
					// console.log(i);
					var to = -i * 1910;
					$(".slideGroup .tempWrap ul").animate({
						left: to
					}, 1000, function() {
						if (i >= $(this).find("li").length - 1) {
							$(this).css("left", "0px");
							i = 0;
							banner();
						}
					});
					i++;
					$(".banner .hd li").removeClass("on").eq(i - 1).addClass("on");
					console.log(i);
					if (i >= 5) {
						i = 0;
					}
				}
				setInterval(banner, 2000);
				
				
// centen_left
			$(".navgation-l").hover(function() {
				$(".position i").removeClass("fa-caret-down").addClass("fa-caret-up")
			}, function() {
				$(".position i").removeClass("fa-caret-up").addClass("fa-caret-down")
			})
			window.onscroll = function() {
				if (window.scrollY >= 100) {
					$(".top-flex").addClass("head_add_top");
					return
				}
				$(".top-flex").removeClass("head_add_top");
			}
			$(".hot_right .bd li").on("mouseenter", function() {
				$(".hot_right .bd li").removeClass("on");
				$(this).addClass("on");
				$(".hot_right .hb li").css("display", "none");
				$(".hot_right .hb li").eq($(this).index()).fadeIn(100);
			})
			$(".hot_left .hd li").on("mouseleave", function() {
				$(".hot_left .hd li").removeClass("on");
				$(this).addClass("on");
				$(".hot_left .bd li").css("display", "none");
				$(".hot_left .bd li").eq($(this).index()).fadeIn(100);
			})
			$("#swtColse").click(function() {
				$("#LRfloater0").hide()
			});
			var f=0;
			var v=setInterval(mo,3000,true);
			$(".hot_left .hd li").on("mouseenter",function(){
				clearInterval(v)
				f=$(this).index()-1;
				mo(this);
				console.log(f+"sddasdas")
			})
			$(".hot_left .hd li").on("mouseleave",function(){
				v=setInterval(mo,3000,true);
				f=$(this).index()-1;
				mo(this);
				console.log(f+"sddasdas")
			})
			function mo(_this){
				f++;
				if(f>=3){
					f=0
				}
				if(typeof _this=="boolean"){
					
					$(".hot_left .hd li").removeClass("on");
					$(".hot_left .hd li").eq(f).addClass("on");
					// console.log(f+"sss")
					$(".hot_left .bd li").css("display","none").eq(f).css("display","block");
					return
				}
					$(".hot_left .hd li").removeClass("on");
					$(_this).addClass("on");
					$(".hot_left .bd li").css("display","none").eq(f).css("display","block");
				f++;
			}
			
// banner2//
			//第二个轮播图开始
			// 将图片复制一份，最后一张图片再复制一次
			$(".tu2").append($(".tu2").html()).prepend($(".banner2 .tu2 li").eq(4).clone(true));
			// 将放文字的li复制一份
			$(".shang").append($(".shang ").html());
			//设置全局变量，存放索引号
			var index = 0;
			// 获取轮播图中图片盒子离左边的距离
			var juli = parseInt($(".banner2 .tu2").css("left"));
			// console.log(juli);
			
			// 一、点击轮播图上的左按钮
			$(".left").click(function() {
			
				if (index == 0) {
					index = 5;
					$(".banner2 .tu2").css("left", (juli + index * (-1470)) + "px");
					$(".you .shang").css("left", (index * (-254)) + "px");
				}
				// 1.索引自减一个，显示上一张
				index--;
			
				// 2.文字是显示为索引+1
				$(".ye").html('0' + (index + 1) + "/05");
			
				// 3.对应的滑动条显示出来
				// 3-1先隐藏所有滑动条
				$(".duan li").removeClass("bl");
				// 3-2把当前的滑动条显示出来
				$(".duan li").eq(index).addClass("bl");
			
				// 4.移动文字块
				$(".you .shang").stop().animate({
					"left": index * (-254) + "px"
				}, 500);
				// 5.让轮播大图也移动起来			
				$(".banner2 .tu2").stop().animate({
					"left": (juli + index * (-1470)) + "px"
				}, 300);
			})
			
			// 二、点击轮播图上的右按钮
			$(".right").click(function() {
			
				if (index == 5) {
					index = 0;
					$(".banner .tu").css("left", (juli + index * (-1470)) + "px");
					$(".you .shang").css("left", (index * (-254)) + "px");
				}
				// 1.点击时索引号加1个
				index++;
			
				// 2.文字是显示为索引+1
				$(".ye").html('0' + (index % 5 + 1) + "/05");
			
				// 3.对应的滑动条显示出来
				// 3-1先隐藏所有滑动条
				$(".duan li").removeClass("bl");
				// 3-2把当前的滑动条显示出来
				$(".duan li").eq(index % 5).addClass("bl");
			
				// 4.移动文字块
				$(".you .shang").stop().animate({
					"left": index * (-254) + "px"
				}, 500);
				// 5.让轮播大图也移动起来
				$(".banner2 .tu2").stop().animate({
					"left": (juli + index * (-1470)) + "px"
				}, 300);
			
			})
			
			// 三、点击右块上左边的按钮
			$(".prev").click(function() {
			
				if (index == 0) {
					index = 5;
					$(".you .shang").css("left", (index * (-254)) + "px");
					$(".banner2 .tu2").css("left", (juli + index * (-1470)) + "px");
				}
				// 1.点击时索引号减1个
				index--;
			
				// 2.文字是显示为索引+1
				$(".ye").html('0' + (index + 1) + "/05");
			
				// 3.对应的滑动条显示出来
				// 3-1先隐藏所有滑动条
				$(".duan li").removeClass("bl");
				// 3-2把当前的滑动条显示出来
				$(".duan li").eq(index).addClass("bl");
			
				// 4.移动文字块
				$(".you .shang").stop().animate({
					"left": index * (-254) + "px"
				}, 500);
				// 5.让轮播大图也移动起来
				$(".banner2 .tu2").stop().animate({
					"left": (juli + index * (-1470)) + "px"
				}, 300);
			})
			
			// 四、点击右块上右边的按钮
			$(".next").click(function() {
				// console.log("开始点击时的" + index);
			
				if (index == 5) {
					index = 0;
					// 解决文字到5的时候拉回到1的bug
					$(".you .shang").css("left", (index * (-254)) + "px");
					$(".banner2 .tu2").css("left", (juli + index * (-1470)) + "px");
				}
			
				// console.log("判断下面的" + index)
			
				// 1.点击时索引号加1个
				index++;
				// console.log("自加之后的" + index)
			
				// 2.文字是显示为索引+1
				$(".ye").html('0' + (index % 5 + 1) + "/05");
			
				// 3.对应的滑动条显示出来
				// 3-1先隐藏所有滑动条
				$(".duan li").removeClass("bl");
				// 3-2把当前的滑动条显示出来
				$(".duan li").eq(index % 5).addClass("bl");
			
				// 4.移动文字块
				$(".you .shang").stop().animate({
					"left": index * (-254) + "px"
				}, 500);
			
				// 5.让轮播大图也移动起来
				$(".banner2 .tu2").stop().animate({
					"left": (juli + index * (-1470)) + "px"
				}, 300);
			
			})