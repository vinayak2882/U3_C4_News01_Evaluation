async function apiCall(url) {
 //add api call logic here

try{
    let res =await fetch(url);

    let data =await res.json();
    
    return data;
}catch(err){
    console.log(err)
}

}


function appendArticles(articles, main) {
 //add append logic here
// console.log(articles)
articles.map(function(el){
    // console.log(el)

    let div1= document.createElement("div");
div1.setAttribute("id", "maindiv");
div1.addEventListener("click", function(){
    // console.log(el)
    showNews(el);
})

let div2= document.createElement("div");
let image = document.createElement("img")
image.src=el.urlToImage
div2.append(image);

let div3= document.createElement("div");
let title = document.createElement("p")
title.textContent=el.title;
div3.append(title)

let div4= document.createElement("div");
let content = document.createElement("p")
content.textContent = el.content
div4.append(content)

div1.append(div2,div3,div4)

document.getElementById("main").append(div1);
// let image = document.createElement("")

})


}

export { apiCall, appendArticles }


function showNews(el){
    localStorage.setItem("article",JSON.stringify(el));
    window.location.href="news.html"
    console.log("vinu")
}


