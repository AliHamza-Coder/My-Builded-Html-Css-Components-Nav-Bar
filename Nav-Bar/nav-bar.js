// for simple stores copy it

// document.querySelector(".menu-icon").addEventListener("click",()=>{
//     document.querySelector(".side-menu").style.left="0%";
// })
// document.querySelector(".close-icon").addEventListener("click",()=>{
//     document.querySelector(".side-menu").style.left="-200%";
// })
// document.querySelector(".side-menu").addEventListener("click", (e) => {
//     if (e.target.classList.contains("nav-link")) {
//         // Find the anchor tag within the clicked <li>
//         const anchor = e.target.querySelector("a");
//         if (anchor) {
//             // Trigger the click event on the anchor tag
//             anchor.click();
//             console.log(anchor);
//         }
//     }
// });
// document.querySelector(".search").addEventListener("click", () => {
//     const searchContainer = document.querySelector(".search-container");
//     searchContainer.style.display = searchContainer.style.display === "none" || searchContainer.style.display === "" ? "block" : "none";
// });





// for ecommerce store copy it

document.querySelector(".menu-circle").addEventListener("click",()=>{
    document.querySelector(".side-menu").style.left="0%";
})
document.querySelector(".close-icon").addEventListener("click",()=>{
    document.querySelector(".side-menu").style.left="-200%";
})
document.querySelector(".side-menu").addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
        // Find the anchor tag within the clicked <li>
        const anchor = e.target.querySelector("a");
        if (anchor) {
            // Trigger the click event on the anchor tag
            anchor.click();
            console.log(anchor);
        }
    }
});
document.querySelector(".search").addEventListener("click", () => {
    const searchContainer = document.querySelector(".search-container");
    searchContainer.style.display = searchContainer.style.display === "none" || searchContainer.style.display === "" ? "block" : "none";
});
