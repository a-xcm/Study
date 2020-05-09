
//获取导航
var nav= document.getElementById('nav');
var nav_a= nav.getElementsByTagName('a');
var temp = nav_a[0];//当前有样式的。
for (var i = 0; i < nav_a.length; i++) {
	nav_a[i].index = i;//给每一个a添加index
	nav_a[i].onclick=function(){
		temp.style='0';
		nav_a[this.index].style='background: #f26c17 ;color: white;';
		temp = nav_a[this.index];
	}
} 

window.onload = function(){
	nav_a[0].style ='background: #f26c17 ;color: white;'
	page_count[0].style = 'background: #f26c17 ;color: white;';
}
//获取页码
var page_btn = document.getElementsByClassName('page-btn');
var page_count = document.getElementsByClassName('page-count');



var j=0;//定义一个索引
//点击页码
for (var i = 0; i < page_count.length; i++) {
   page_count[i].index =i;//给每一个claas为page_count添加index

   page_count[i].onclick = function () {
//      alert(this.index);	
         page_count[j].style='0';				 
        page_count[this.index].style='background: #f26c17 ;color: white;';
         j=this.index;
       
    }

}
//前一页
page_btn[0].onclick = function(){	
	if(j!=0){
		page_count[j].style='0';
		page_count[j-1].style='background: #f26c17 ;color: white;';
		j--;
	}
	
}
//后一页
page_btn[1].onclick = function(){
	
	if(j!=3){page_count[j].style='0';
		page_count[j+1].style='background: #f26c17 ;color: white;';
		j++;
	}
	
}
