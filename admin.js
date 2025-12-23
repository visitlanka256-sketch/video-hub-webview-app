
function addVideo(){
 let v={
  id:Date.now(),
  title:title.value,
  url:url.value,
  type:type.value
 };
 let vids=JSON.parse(localStorage.getItem("videos"))||[];
 vids.unshift(v);
 localStorage.setItem("videos",JSON.stringify(vids));
 alert("Video Added");
}
