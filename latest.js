const latestPost =async (category) =>{
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const data = await response.json()
    latestDisplay(data.allPosts)
    }
    const latestDisplay =(allPosts)=> {
        console.log(allPosts)
// const latestContainer = document.getElementById("latestPostLoader");
// allPosts.forEach(post => {
//     console.log(post)
// });
    }





    latestPost();