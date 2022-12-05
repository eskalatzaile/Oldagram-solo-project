const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContent = document.querySelector("#post-content")

function renderPosts(){
    posts.forEach(function (post) {
        postContent.innerHTML +=`
                <div class="user-container">
                    <img src="${post.avatar}" class="post-avatar">
                    <div class="user-location-info">
                        <h1 class="margin-zero small-txt bold-txt">${post.name}</h1>
                        <p class="margin-zero small-txt">${post.location}</p>
                    </div>
                </div>
                
                <img src="${post.post}" id="post-img">
                
                <div class="icon-container">
                    <img src="images/icon-heart.png" class="icon">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                </div>
                
                <p class="likes bold-txt margin-zero">${post.likes} likes</p>
                
                <div class="desc-container">
                    <p class="description small-txt margin-zero"><span class="bold-txt">${post.username}</span> ${post.comment}</p>
                </div>
                `
    })
    
}

renderPosts()

