const loadAllPost =async (category) =>{
//================first way================
// console.log(`
//     https://openapi.programming-hero.com/api/retro-forum/posts${category?` ?category=${category}`: ''}
//     `)

//===============second way=======================
    //  if(category){
//     console.log(`
//          https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}
//         `)
//  } else{
//     console.log(`
//         https://openapi.programming-hero.com/api/retro-forum/posts
//        `) 
//  }
document.getElementById("post-container").innerHTML=""


 const response = await   fetch(`
    https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`: ''}`);
 const data =await response.json();
 displayAllPost(data.posts)
}

// ========= forEach show display posts==============
const displayAllPost = (posts) =>{
   const postContainer=document.getElementById("post-container");
   posts.forEach(post => {
    console.log(post)
   const div = document.createElement('div');
   div.innerHTML=`
   <div class ="p-6 lg:p-12 flex gap-6 lg:flex-row flex-col items-center lg:items-start bg-gray-200 rounded-3xl">
   <div class = "w-24 rounded-xl">

   <div class = "indicator">
   <span class="indicator-item badge ${post.isActive? "bg-green-600":"bg-red-500"}"></span></div>
   <img src =${post.image}/>
   </div>
  <div class ="border-b-2">
   <h1>category Author:${post.author.name}</h1>
   <h1 class="font-bold">tittle:${post.title}</h1>
   <h1 class="">description:${post.description}</h1>
  
  </div>
    <div class ="flex gap-2">
    <p> comment:${post.comment_count}</p>
    
    <p> view:${post.view_count}</p>
    <p>Min:${post.posted_time} </p>
    </div>
<button id="addToList" onclick="mark('${post.description}', ${post.view_count})"
class="addToList btn btn-circle bg-green-500 btn-sm">
<i class ="fa-solid fa-envelope-open text-white"/></i></button>
   </div>
  
   
   `;
   postContainer.appendChild(div)
   });
};

const mark= (description,view_count)=>{
    console.log(description,view_count)
const markAsReadContainer = document.getElementById("markAsReadContainer")
const div = document.createElement("div");
div.innerHTML =`
<div class = "flex justify-between p-2 lg:p-3 bg-white rounded-2xl items-center gap-3">
<div class= "lg:w-4/5 w-11/12">
<p>${description}</p>
</div>
<div class= "lg:w-1/5 w-4/12 flex justify-end">
<p>${view_count}</p>
</div>
</div>

`
markAsReadContainer.appendChild(div)
handleCount()


};

const handleCount = () =>{
const prevCount = document.getElementById("markAsReadCounter").innerText;
const convertCounter = parseInt(prevCount)
const sum = convertCounter +1;
document.getElementById("markAsReadCounter").innerText = sum;
}

loadAllPost()

const handleSearchByCategory = () =>{
    const searchText =document.getElementById("searchPosts").value;
    loadAllPost(searchText)
}

