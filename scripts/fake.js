window.onload=function(){
	// 头部隐藏块
	var headNav=document.getElementsByClassName('headNav-h');
	var headHidden=document.getElementsByClassName('headHidden');
	for(var i=0;i<headNav.length;i++){
		headNav[i].index=i;
		headNav[i].onmouseover=function(){
			headHidden[this.index].style.display='block';
		};
		headNav[i].onmouseout=function(){
			headHidden[this.index].style.display='none';
		};
	}
	// banner左边的列表
	var itemHidden=document.getElementsByClassName('item-h');
	var itemList=document.getElementsByClassName('item-list');
	var imgHidden=document.getElementsByClassName('banner-item');
	var RimgHidden=document.getElementsByClassName('small-item');
	var colors=['#FFD1DC','#FED44C','#F2F7FD','#345171','#DC2E63','#FBAD17','#D2FBF5','#A5856E','#D70609','#FFE957','#FFC6D5','#29A6FF','#E4E2E3','#FFD5D6','#30C4FF','#C9E0B2'];
	var img=document.getElementById('img');
	console.log(itemHidden);
	console.log(imgHidden);
	console.log(itemList);
	console.log(RimgHidden);
	for(var i=0;i<itemHidden.length;i++){
		itemHidden[i].index=i;
		if(i==0){
			itemHidden[0].onmouseover=function(){
				itemList[this.index].style.display='block';
				banner.style.background=colors[this.index];
			};
			itemHidden[i].onmouseout=function(){
				itemList[this.index].style.display='none';
			};
		}else{
			itemHidden[i].onmouseover=function(){
				itemList[this.index].style.display='block';
				imgHidden[this.index-1].style.display='block';
				RimgHidden[this.index].style.display='block';
				img.style.display='none';
				banner.style.background=colors[this.index];
			};
			itemHidden[i].onmouseout=function(){
				itemList[this.index].style.display='none';
				imgHidden[this.index-1].style.display='none';
				RimgHidden[this.index].style.display='none';
				img.style.display='block';
			};
		}
		
	}
// fixed右
	var rightNav=document.getElementsByClassName('rightNav');
	var rightHidden=document.getElementsByClassName('tip');
	for(var i=0;i<rightNav.length;i++){

		rightNav[i].index=i;
		rightNav[i].onmouseover=function(){
			rightHidden[this.index].style.display='block';
		};
		rightNav[i].onmouseout=function(){
			rightHidden[this.index].style.display='none';
		};
}
// banner轮播
var el=document.getElementById('banner-chang'),
	bannerRow=document.getElementsByClassName('banner-row'),
	numNav=document.getElementsByClassName('num-nav'),
	banner=document.getElementById('banner'),
	Left=-el.firstElementChild.offsetWidth,
	timespec=1000,
	index=0,
	color=['#FFD1DC','#F9F3B9','#DBDBDD','#64C5A4','#E2E2E2','#B90AF9'],
	previous=numNav[0];
	numNav[0].style.background='red';
	fn=function(){
		previous.style.background='black';
		el.style.marginLeft=Left*index+'px';
		numNav[index].style.background='red';
		banner.style.background=color[index]
		previous=numNav[index];
		index++;
		if(index==bannerRow.length){
			index=0;
		}
	};
	for(var i=0;i<numNav.length;i++){
		numNav[i].index=i;
		numNav[i].onmouseover=function(){
				clearInterval(t);
				previous.style.background='black';
				this.style.background='red';
				el.style.marginLeft=Left*this.index+'px';
				banner.style.background=color[this.index];
				previous=this;
		};
		numNav[i].onmouseout=function(){
			clearInterval(t);
			index=this.index+1;
			t=setInterval(fn,timespec);
		};
		
	}
	var t=setInterval(fn,timespec);


// 楼层跳转
	var fix=document.getElementById('sn-nav-wrapper'),
	    link=document.getElementsByClassName('nav-name'),
	    floor=document.getElementsByClassName('fp-floor'),
	    xishu=1,timerId,start,end;

	for(var i=0;i<link.length;i++){
	    link[i].index=i;
		link[i].onclick=function(){
		var scroll=floor[this.index].offsetTop-fix.getBoundingClientRect().top,
			nowtop=document.body.scrollTop;
			start=nowtop,end=scroll;
			var cha=Math.abs(start-end)/50;
			if(start<end){
				xishu=1;
			}else{
				xishu=-1;
			}
			timerId=setInterval(function(){
				document.body.scrollTop=start;
				start+=xishu*cha;
				if((xishu>0)?(start>=end):(start<=end)){
					clearInterval(timerId);
				}
			},1);
		};
	
	}

	// 返回顶部
	var top=document.getElementById('top');
	var SEC=1,TIME=50;
	top.onclick=function(){
		var start=document.body.scrollTop;
		var cha=start/TIME/SEC;
		clearInterval(t);
	    var t=setInterval(function(){
	        document.body.scrollTop=start;
	        start-=cha;
	        if(start<=0){
	            clearInterval(t);
	        }

	    },SEC)
	    
	};
	// 品牌分类选项卡
	var fenlei=document.getElementsByClassName('fenlei');
	var brandHidden=document.getElementsByClassName('brand-hidden');
	for(var i=0;i<fenlei.length;i++){
		fenlei[i].index=i;
		fenlei[i].onclick=function(){
			for(var i=0;i<fenlei.length;i++){
				brandHidden[i].style.zIndex=10;
				fenlei[i].style.borderBottomWidth='0px';
				
			}

			brandHidden[this.index].style.zIndex=100;
			this.style.borderBottom='2px solid black';
		};
		
	}
	// 楼层品牌选项卡
	// var pinpaiList=document.getElementsByClassName('pinpaiList'),
	// 	pinpai=document.getElementsByClassName('pinpai');
	// 	fn=function(){
			
	// 	};

	// 顶部搜索框
	var headerShow=document.getElementById('header-show');
	console.log(headerShow);
	document.onscroll=function(){
		console.log(document.body.scrollTop);
		if(document.body.scrollTop>='1300'){

			var t=setTimeout(function(){
				headerShow.style.top='0';
			},500);
		}else if(document.body.scrollTop<'1300'){
			headerShow.style.top='-50px';
			clearTimeout(t);
		}
	};

	


	
	
};