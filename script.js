let data = [];
const count = 10;
const apikey = "Dx8F8bc8M-OYLGjakB46ExFLWlVSi759Kfs_TQ4R92I";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;
let ready = false;
let imageloaded = 0;
let disu = document.getElementById("disu");


function imageloader(){
    imageloaded++;
   if(imageloaded === count){
    ready = true;
    disu.style.display = "none";
   }
}

let container = document.getElementById("container");


function display(){

    data.forEach((photo) => {
    let ele1 = document.createElement("a");

    ele1.setAttribute( "href", photo.links.html);
   ele1.setAttribute("target", "_blank" );

    let ele2 = document.createElement("img");

    ele2.setAttribute( "src", photo.urls.regular);
    ele2.setAttribute("alt", photo.alt_description);
    ele2.setAttribute("title", photo.alt_description);
    ele1.append(ele2);
   
   container.append(ele1);
     
    ele2.addEventListener("load" , imageloader);
 });
}



async function imageloadTen(){
   try{
    const response = await fetch(apiURL);
           data = await response.json();
           console.log(data);
            display();
   } catch (error){
           //  console.log(error);
   }  
}
 imageloadTen();

 window.addEventListener("scroll", () => {
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight && ready){
      disu.style.display = "block";
      imageloadTen();
        
    }
 });


