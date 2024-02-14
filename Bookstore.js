const tittle=document.querySelector(".tittle")
const Subtitle=document.querySelector(".sub-tittle")
const imageContainer = document.querySelector(".image")
const price=document.querySelector(".price")
const searchBox=document.getElementById("search-box")
const button=document.getElementById("btn")

async function fetchBooks(book){
  const apiUrl=`https://api.itbook.store/1.0/search/${book}`

  const response=await fetch(apiUrl)

  if(response.status==404){
    console.log("error")
  }
  else{
    const data=await response.json()
    console.log(data);
    
    tittle.innerHTML=data.books[0].title;
    Subtitle.innerHTML=data.books[0].subtitle;
    const imageUrl = data.books[0].image;
    imageContainer.style.backgroundImage = `url(${imageUrl})`;
    imageContainer.style.backgroundSize="cover"
    price.innerHTML=data.books[0].price;
    
  }
}

button.addEventListener("click",()=>{
   fetchBooks(searchBox.value)
})