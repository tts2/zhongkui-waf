layui.define(["jquery","element"],function(e){"use strict";layui.jquery,layui.element;e("count",new function(){this.up=function(e,t){t=t||{};var n=document.getElementById(e),i=t.time,u=t.num,r=t.regulator,l=u/(i/r),a=0,c=0,o=setInterval(function(){(a+=l)>=u&&(clearInterval(o),a=u);var e=a.toFixed(t.bit?t.bit:0);e!=c&&(c=e,n.innerHTML=c)},30)}})});