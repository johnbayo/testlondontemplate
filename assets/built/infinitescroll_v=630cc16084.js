function initInfiniteScroll(n,t){var r=t.querySelector("link[rel=next]");if(r){var i=t.querySelector(".post-feed");if(i){var o=300,l=!1,s=!1,c=n.scrollY,u=n.innerHeight,d=t.documentElement.scrollHeight;n.addEventListener("scroll",a,{passive:!0}),n.addEventListener("resize",m),v()}}function f(){if(404===this.status)return n.removeEventListener("scroll",a),void n.removeEventListener("resize",m);this.response.querySelectorAll(".post-card").forEach(function(e){i.appendChild(e)});var e=this.response.querySelector("link[rel=next]");e?r.href=e.href:(n.removeEventListener("scroll",a),n.removeEventListener("resize",m)),d=t.documentElement.scrollHeight,s=l=!1}function e(){if(!s)if(c+u<=d-o)l=!1;else{s=!0;var e=new n.XMLHttpRequest;e.responseType="document",e.addEventListener("load",f),e.open("GET",r.href),e.send(null)}}function v(){l||n.requestAnimationFrame(e),l=!0}function a(){c=n.scrollY,v()}function m(){u=n.innerHeight,d=t.documentElement.scrollHeight,v()}}initInfiniteScroll(window,document);
//# sourceMappingURL=infinitescroll.js.map