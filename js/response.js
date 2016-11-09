$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>156){
			$('.dingwei').css("display","block")
		}else{
			$('.dingwei').css("display","none")
		}
	})
})
//why
$(document).ready(function(){
	$('.why_ul li').first().addClass('first')
	$(".why_ul li").click(function(){
		var index=$(this).index()
		$('.why_ul li').removeClass('first').eq(index).addClass('first')
		$('.why_bot').hide().eq(index).show()
	})
})
//what
$(document).ready(function(){
	var t=setInterval(move,2000);
	var n=0;
	function move(){
		n++;
		if(n>=$('.what1').length){
			n=0;
		}
		$('.what1').hide().eq(n).show();
	}
})
//
//
$(document).ready(function(){
	var flog=true
	var t1=setInterval(move1,2000);
	function move1(){	
		if(!flog){
			return
		}
		flog=false
		var width=$('.photoLunbo').width()+20;
		$('.photo_box').stop(true).animate({left:-width},600,function(){
			var first=$('.photo_box .photoLunbo:first-child')
			$('.photo_box').append(first)
			$('.photo_box').css("left",0)
			flog=true
		})
	}
//	lunbo.mouseover(function(){
//		clearInterval(t);
//	})
//	lunbo.mouseout(function(){
//		t=setInterval(move,2000);
//	})
//	right.click(function(){
//		move()
//	})
//	left.click(function(){
//		if(!flog){
//			return
//		}
//		flog=false
//		var width=pic.width()+20;
//		var first=$('.photo_box ..photo_box:first-child')
//		var last=$('.photo_box ..photo_box:last-child')
//		first.stop(true).before(last)
//		imgBox.css("left",-width)
//		imgBox.animate({left:0},600,function(){
//			flog=true
//		})
//	})
$(document).ready(function(){
	var n2=0
	var flag1=true
	var t2=setInterval(move2,5000)
	function move2(){
		n2++
		if(n2>=$('.banner_box').length){
			n2=0
		}
		$('.banner_box').stop(true).hide().eq(n2).show()
	}
})





})



