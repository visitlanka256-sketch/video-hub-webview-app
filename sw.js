self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("videohub").then(c=>
      c.addAll(["/","/index.html","/style.css","/script.js"])
    )
  );
});
