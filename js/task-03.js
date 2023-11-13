const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector("ul")
console.log(gallery)  
gallery.classList.add("js-gallery")
console.log(gallery)
gallery.style.display="flex";
gallery.style.flexDirection = "column";
gallery.style.gap="50px"
function marup(arr){
const markup= arr
.map(({url,alt})=>`<li><img src="${url}" alt="$alt" width="250"/></li>`)

.join("")
gallery.insertAdjacentHTML("afterbegin", markup)
}
marup(images)