const images = [
  "https://picsum.photos/400/250?1",
  "https://picsum.photos/400/250?2",
  "https://picsum.photos/400/250?3",
  "https://picsum.photos/400/250?4"
];


let index=0

const slideImg= document.getElementById("slideImg") ;

document.getElementById("next").onclick = () => {
    index = (index+1) % images.length ;
    slideImg.src = images[index];
};

document.getElementById("prev").onclick = () => {
    index = (index-1 + images.length) % images.length ;
    slideImg.src = images[index]; 
}

setInterval(() => {
    index = (index+1) % images.length ;
    slideImg.src = images[index];
} , 3000);