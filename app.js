/*
Author: Mahad Osman
Exercise: Giphy Party Exercise
Date: Oct 18th
Reference: Springboard soultions for the data.length as I initally locked it to 10
*/



console.log("Let's get this party started!");
const search = document.querySelector('#search');
const gifGallery = document.querySelector('#gifGallery')


async function getGiphy(results){
    console.log(results)
    //initally had this as *11 but changed to length post reference 
    let randomGif = Math.floor(Math.random() * results.data.length);
    console.log(randomGif);
    let newGifContainer = document.createElement('div')
    let newGif = document.createElement('img')
    newGif.classList.add('newGif')
    newGif.src = results.data[randomGif].images.original.url

    newGifContainer.append(newGif)
    gifGallery.append(newGifContainer);
 }

const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function(e){
    e.preventDefault();
    let searchTerm = search.value;
    console.log(searchTerm)
    search.value = '';
   // searchTerm = search.value; 

    const response = await axios.get("https://api.giphy.com/v1/gifs/search",{
        params:{
           q: searchTerm,
           api_key: "DTxLB3bZiG6ECQZzM1cECpyw7jF8tLL3",
           //limit: 10
        }
        });
        //console.log(response);
        getGiphy(response.data);
    });



const deleteButton = document.querySelector('#deleteBtn')

deleteBtn.addEventListener('click', function(e){
    e.preventDefault();
    gifGallery.innerHTML = "";
    // for(let div of gifGallery.childNodes.length){
    //     div.remove()
    // }
})

 
//  ?api_key=DTxLB3bZiG6ECQZzM1cECpyw7jF8tLL3&q=Dogs&limit=25&offset=0&rating=g&lang=en")
//  console.log(response)