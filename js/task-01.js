// Number of categories
const categories = document.getElementById("categories");
const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);

// Heading and Number
const itemstwo = document.querySelectorAll("#categories.item");
items.forEach((item) =>{
    const headerTitle = item.querySelector("h2").textContent;
    const numberOfElements = item.querySelectorAll("li").length;
    console.log(`Categories: ${headerTitle}`);
    console.log(`Elements: ${numberOfElements}`);
})