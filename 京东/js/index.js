window.onload=function(){
 	 var aa=getClass('yifyou')[0].getElementsByTagName('a')
 	 var bb=getClass("yifuyou",getClass('zuide')[0])
   var aa1=getClass('yifyou')[1].getElementsByTagName('a')
   var bb1=getClass("baokuo",getClass('zuile')[0])
   var aa2=getClass('yifyou')[2].getElementsByTagName('a')
   var bb2=getClass("huaweibox",getClass('bao')[0])
   var aa3=getClass('yifyou')[3].getElementsByTagName('a')
   var bb3=getClass("huaweibox",getClass('silouwanyin')[0])
   var aa4=getClass('yifyou')[4].getElementsByTagName('a')
   var bb4=getClass("huaweibox",getClass('wulouwanyin')[0])
   var aa5=getClass('yifyou')[5].getElementsByTagName('a')
   var bb5=getClass("liuloubox",getClass('liulouzuile')[0])
   var aa6=getClass('yifyou')[6].getElementsByTagName('a')
   var bb6=getClass("liuloubox",getClass('liulouzuile')[1])
    var aa7=getClass('yifyou')[7].getElementsByTagName('a')
   var bb7=getClass("liuloubox",getClass('liulouzuile')[2])
   var aa8=getClass('yifyou')[8].getElementsByTagName('a')
  var bb8=getClass("liuloubox",getClass('jiulouwanyin')[0])
 
 	function hanshu(name,xuanxiang){
 	 for(var i=0;i<name.length;i++){
            name[i].index=i;
         name[i].onmouseover=function(){
            
               for(var j=0;j<xuanxiang.length;j++){
                  xuanxiang[j].style.display="none";
                  name[j].className="";
                   
               }
               xuanxiang[this.index].style.display="block"
               name[this.index].className="huanqilai"
              
      }

      }
     }
     hanshu(aa,bb)
     hanshu(aa1,bb1)
     hanshu(aa2,bb2)
     hanshu(aa3,bb3)
     hanshu(aa4,bb4)
     hanshu(aa5,bb5)
     hanshu(aa6,bb6)
     hanshu(aa7,bb7)
     hanshu(aa8,bb8)


      var imgs=getClass('bannertupian')[0].getElementsByTagName("img");
      var dian=getClass('yigekuang')[0].getElementsByTagName("div");
       var tupianbox=getClass('bannertupian')[0];
       var gundong=getClass('gundongyou')[0];
       var gundon=getClass('gundongzuo')[0];

     imgs[0].style.display="block";
     var sun=0;
      var t=setInterval(move,3000)
        function move(){
     	sun++;
     	if(sun>dian.length-1){
     		sun=0;
     	}
     	for(var i=0;i<imgs.length;i++){
     		imgs[i].style.display="none";
     		dian[i].className="";
     	}
     	imgs[sun].style.display="block";
     	dian[sun].className="liugedian";
     }
    tupianbox.onmouseover=function(){
      clearInterval(t)
    }
    tupianbox.onmouseout=function(){
      t=setInterval(move,3000)
    }
     gundong.onclick=function(){
      move();
     }

   gundon.onclick=function(){
      sun--
      if(sun==-1){
        sun=imgs.length-1;
      }
      for(var j=0;j<imgs.length;j++){
        imgs[j].style.display="none";
        dian[j].className="";
      }
      imgs[sun].style.display="block";
        dian[sun].className="liugedian";
   }
   function tongyong(anniu,lunbo){
   for(var i=0;i<lunbo.length;i++){
      anniu[i].index=i;
      anniu[i].onclick=function(){
        for(var j=0;j<lunbo.length;j++){
          lunbo[j].style.display="none";
          anniu[j].className=""
        }
        lunbo[this.index].style.display="block"
        anniu[this.index].className="liugedian"
      }
    }
  }
  tongyong(dian,imgs)

 
   var biggun=getClass("yuanlai")[0]
   var gunbox=getClass("simida",biggun)
   var gunboxW=parseInt(getStyle(gunbox[0],'width'))
   var bigbtn=getClass("sbgundong")[0]
   var btnleft=getClass("sbleft",bigbtn)[0]
   var btnright=getClass("sbright",bigbtn)[0]
   biggun.style.width=gunboxW*3+"px";

    var nu=0;
    btnright.onclick=function(){
       
       nu++;
       if(nu==3){
        nu=0;
       }
       animate(biggun,{marginLeft:-nu*gunboxW})
    }
     btnleft.onclick=function(){
       
       nu--
       if(nu==-1){
        nu=2;
       }
       animate(biggun,{marginLeft:-nu*gunboxW})
    }



var piao=getClass("jdtesetupian")
console.log(piao)

for(var i=0;i<piao.length;i++){
  var piaofu=piao[i].getElementsByTagName("img")[0];
  tese(piaofu)
}
 function tese(fu){
  fu.onmouseover=function(){
    animate(fu,{marginLeft:10},Tween.Quad.easeIn)
  }
  fu.onmouseout=function(){
    animate(fu,{marginLeft:0},Tween.Quad.easeIn)
  }
}
  




  var imgbox=getClass('lun')[0]
  var img=getClass('lun')[0].getElementsByTagName('a')
  var imgW= parseInt(getStyle(img[0],'width'))
  var btn=getClass('btn')[0].getElementsByTagName('div')
  var dianji=getClass('dianji')
  var dianyou=getClass("dianjiright",dianji[0])[0]
  var dianzuo=getClass("dianjileft",dianji[0])[0]
 
  var btns=getClass('btn')[1].getElementsByTagName('div')
  var sanimgbox=getClass('hwtuijiantupian')[0]
  var sanimg=getClass('hwtuijiantupian')[0].getElementsByTagName('a')
  var sanimgW= parseInt(getStyle(sanimg[0],'width'))
  var sdianji=getClass('sdianji')
  var sdianyou=getClass("sdianjiright",sdianji[0])[0]
  var sdianzuo=getClass("sdianjileft",sdianji[0])[0]
   
   var siloubtn=getClass('btn')[2].getElementsByTagName('div')
  var silouimgbox=getClass('hwtuijiantupian')[1]
  var silouimg=getClass('hwtuijiantupian')[1].getElementsByTagName('a')
  var silouimgW= parseInt(getStyle(silouimg[0],'width'))
  var siloudianyou=getClass("sdianjiright",sdianji[1])[0]
  var siloudianzuo=getClass("sdianjileft",sdianji[1])[0]

  var wuloubtn=getClass('btn')[3].getElementsByTagName('div')
  var wulouimgbox=getClass('hwtuijiantupian')[2]
  var wulouimg=getClass('hwtuijiantupian')[2].getElementsByTagName('a')
  var wulouimgW= parseInt(getStyle(wulouimg[0],'width'))
  var wuloudianyou=getClass("sdianjiright",sdianji[2])[0]
  var wuloudianzuo=getClass("sdianjileft",sdianji[2])[0]




  var shiloubtn=getClass('btn')[4].getElementsByTagName('div')
  var shilouimgbox=getClass('hwtuijiantupian')[3]
  var shilouimg=getClass('hwtuijiantupian')[3].getElementsByTagName('a')
  var shilouimgW= parseInt(getStyle(wulouimg[0],'width'))
  var shiloudianyou=getClass("sdianjiright",sdianji[3])[0]
  var shiloudianzuo=getClass("sdianjileft",sdianji[3])[0]





  var liuloubtn=getClass('teshuanniu')[0].getElementsByTagName('div')
  var liulouimgbox=getClass('cheng')[0]
  var liulouimg=getClass('cxlunbo')[0]
  var liulouimgW= parseInt(getStyle(liulouimg,"width"))
  var liuloudianji=getClass('liudianji')[0]
  var liuloudianyou=getClass("liudianjiright",liuloudianji)[0]
  var liuloudianzuo=getClass("liudianjileft",liuloudianji)[0]


  var qiloubtn=getClass('teshuanniu')[1].getElementsByTagName('div')
  var qilouimgbox=getClass('cheng')[1]
  var qilouimg=getClass('cxlunbo')[1]
  var qilouimgW= parseInt(getStyle(liulouimg,"width"))
  var qiloudianji=getClass('liudianji')[1]
  var qiloudianyou=getClass("liudianjiright",qiloudianji)[0]
  var qiloudianzuo=getClass("liudianjileft",qiloudianji)[0]


  var baloubtn=getClass('teshuanniu')[2].getElementsByTagName('div')
  var balouimgbox=getClass('cheng')[2]
  var balouimg=getClass('cxlunbo')[2]
  var balouimgW= parseInt(getStyle(liulouimg,"width"))
  var baloudianji=getClass('liudianji')[2]
  var baloudianyou=getClass("liudianjiright",baloudianji)[0]
  var baloudianzuo=getClass("liudianjileft",baloudianji)[0]


   var jiuloubtn=getClass('teshuanniu')[3].getElementsByTagName('div')
  var jiulouimgbox=getClass('cheng')[3]
  var jiulouimg=getClass('cxlunbo')[3]
  var jiulouimgW= parseInt(getStyle(liulouimg,"width"))
  var jiuloudianji=getClass('liudianji')[3]
  var jiuloudianyou=getClass("liudianjiright",jiuloudianji)[0]
  var jiuloudianzuo=getClass("liudianjileft",jiuloudianji)[0]
  // var zuo=getClass('left')[0]
  // var you=getClass('right')[0]
function jiandan(ole,ann,tpw,zuo,you){
  var sum=0;
  ole.style.width=tpw*4+'px';
   var m=setInterval(cc,3000);
    function cc(){ 
      sum++;
      if(sum>img.length-1){
        sum=0;
      }
      animate(ole,{marginLeft:-sum*tpw})
      for(var i=0;i<ann.length;i++){                                                          
        ann[i].className="";
      }
       ann[sum].className="hot";
   }
  
   ole.onmouseover=function(){
    clearInterval(m)
   }
   ole.onmouseout=function(){
    m=setInterval(cc,3000)
   }
     you.onclick=function(){
      cc()
    }
    zuo.onclick=function(){
      sum--
      if(sum==-1){
        sum=img.length-1
      }
      animate(ole,{marginLeft:-sum*tpw})
      for(var i=0;i<img.length;i++){
        ann[i].className="";
      }
      ann[sum].className="hot"
    }
    var index;
    for(var i=0;i<ann.length;i++){
      ann[i].index=i
      ann[i].onclick=function(){
        animate(ole,{marginLeft:-this.index*tpw})
        for(var j=0;j<img.length;j++){
          ann[j].className=""
        }
        ann[this.index].className="hot"
      }
    }
 }
  jiandan(imgbox,btn,imgW,dianzuo,dianyou)
  jiandan(sanimgbox,btns,sanimgW,sdianzuo,sdianyou)
  jiandan(silouimgbox,siloubtn,silouimgW,siloudianzuo,siloudianyou)
  jiandan(wulouimgbox,wuloubtn,wulouimgW,wuloudianzuo,wuloudianyou)
  jiandan(liulouimgbox,liuloubtn,liulouimgW,liuloudianzuo,liuloudianyou)
  jiandan(qilouimgbox,qiloubtn,qilouimgW,qiloudianzuo,qiloudianyou)
  jiandan(balouimgbox,baloubtn,balouimgW,baloudianzuo,baloudianyou)
  jiandan(jiulouimgbox,jiuloubtn,jiulouimgW,jiuloudianzuo,jiuloudianyou)
  jiandan(shilouimgbox,shiloubtn,shilouimgW,shiloudianzuo,shiloudianyou)


    var car=getClass('over')
    for(var i=0;i<car.length;i++){
      var box=getClass('over')[i]
      var bottom=getClass('carbottom',car[i])[0]
      var top=getClass('cartop',car[i])[0]
      gouwuche(box,bottom,top)
    }
    function gouwuche(canshu1,canshu2,canshu3){
       canshu1.onmouseover=function(){
        canshu3.style.background="#c81623"
        canshu2.style.background="#c81623"
     animate(canshu2,{marginLeft:-70},600,Tween.Quad.easeIn);
  }

  canshu1.onmouseout=function(){

     animate(canshu2,{marginLeft:0},600,Tween.Quad.easeIn);
      canshu3.style.background="#7a6e6e"
      canshu2.style.background="#7a6e6e"
  }
    }


var sps=$(".sps")
var btn=$(".cengshu")
var wenzi=$(".wenzi")
var shuzi=$(".shuzi")
var arr=[];
for(var i=0;i<btn.length;i++){
     arr.push(sps[i].offsetTop)
     }
     for(var j=0;j<btn.length;j++){
      btn[j].index=j
      btn[j].onclick=function(){
      animate(document.body,{scrollTop:arr[this.index]})
      }
     }
   window.onscroll=function(){
    var obj=document.body.scrollTop?document.body:document.documentElement;
     var stop=obj.scrollTop

    for(var i=0;i<btn.length;i++){
          if(stop>=arr[i]){
            for(var j=0;j<btn.length;j++){
              wenzi[j].style.display="none"
              shuzi[j].style.display="block"
            }
             wenzi[i].style.display="block"
          shuzi[i].style.display="none"
          }
         
    }
   }
    
    
   
   car[5].onclick=function(){
   var obj1=document.body.scrollTop?document.body:document.documentElement;
    animate(obj1,{scrollTop:0})
  }
   


 }


