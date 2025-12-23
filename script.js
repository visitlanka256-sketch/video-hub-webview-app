
let videos = JSON.parse(localStorage.getItem("videos")) || [];

function saveProgress(id,time){
 localStorage.setItem("progress_"+id,time);
}

function getProgress(id){
 return localStorage.getItem("progress_"+id) || 0;
}

function renderVideos(list){
 document.getElementById("videoList").innerHTML="";
 list.forEach(v=>{
  let div=document.createElement("div");
  div.className="video";
  div.innerHTML=`
   <h3>${v.title}</h3>
   ${v.type=="youtube" ?
   `<iframe src="https://www.youtube.com/embed/${v.url}" allowfullscreen></iframe>` :
   `<video controls ontimeupdate="saveProgress('${v.id}',this.currentTime)"
    onloadedmetadata="this.currentTime=getProgress('${v.id}')">
    <source src="${v.url}">
   </video>`}
   <button onclick="addFav('${v.id}')">❤️ Favorite</button>
  `;
  document.getElementById("videoList").appendChild(div);
 });
}

function addFav(id){
 let fav=JSON.parse(localStorage.getItem("fav"))||[];
 if(!fav.includes(id)){fav.push(id);}
 localStorage.setItem("fav",JSON.stringify(fav));
 alert("Added to Favorites");
}

document.getElementById("search").oninput=e=>{
 let q=e.target.value.toLowerCase();
 renderVideos(videos.filter(v=>v.title.toLowerCase().includes(q)));
};

renderVideos(videos);
