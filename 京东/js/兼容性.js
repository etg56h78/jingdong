function getClass(classname,obj){
   	var obj=obj||document
   	if(document.getElementsByClassName!=undefined){
   		return obj.getElementsByClassName(classname)
   	}
   	else{
   		var arr=[];
   		var a=obj.getElementsByTagName('*');
   		for(var i=0;i<a.length;i++){
             if(getcheck(a[i].className,className)){
   			arr.push(a[i]);
   		}
   		return arr;
   		}
   		
   	}
   }
   function getcheck(oldClass,newClass){
      var arr=oldClass.split(" ");
      for(i=0;i<oldClass .className.length;i++){
        if(arr[i]==newClass){
         return true;
        }
     }
      return false;
   }


   function text(obj,val){
      if(val==undefined){     //如果val是undefinded  说明没有参数 则它没有定义   则该函数只需要获取不需要修改
         if(obj.innerText){
            return obj.innerText;
         }else{
            return obj.textContent;
         }
      }//if里面的是获取该对象
      else{
         if(obj.innerText==val){
            obj.innerText=val;
         }else{
            obj.Content=val;
         }
      }  //else里面的是是设置该对象。
   }


   function getStyle(obj,attr){
     if(obj.currentStyle){
      return obj.currentStyle[attr];
     }else{
      return getComputedStyle(obj,null)[attr];
     }
   }
  

   // function jianrong(obj,val){
   //      if(val=undifinded){              
   //        if(obj.innerText){
   //        return obj.innerText
   //      }
   //      else{
   //        return obj.textContent
   //      }
   //    }else{
   //      if(obj.innerText=val){
   //      obj.innerText=val 
   //    }else{
   //      obj.textContent=val
   //    }

   //    }
   // }

     function $(selector,con){
       if(typeof selector=="string"){
        con=con||document
        if(selector.charAt(0)=="#"){
          return document.getElementById(selector.substr(1));
        }
        if(selector.charAt(0)=="."){
          return getClass(selector.substr(1),con)
        }
        else if(/^(a-zA-z)(A-za-z1-6)*$/.test(selector)){
          return con.getElementsByClassName(selector);
        }

       }
       else if(typeof selector=="function"){
         window.onload=function(){
            selector();
       }
       }     


     }