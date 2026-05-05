// Fake Search (UI only)
document.querySelector(".search-bar").addEventListener("focus", () => {
    console.log("Search clicked");
});

// Dropdown Example
const select = document.querySelector("select");
if (select) {
    select.addEventListener("change", () => {
        alert("Size Selected: " + select.value);
    });
}

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Product added to cart!");
    });
    // Load More
const loadBtn = document.getElementById("loadMoreBtn");

if (loadBtn) {
    loadBtn.addEventListener("click", () => {
        const hiddenProducts = document.querySelectorAll(".hidden");

        hiddenProducts.forEach(product => {
            product.style.display = "block";
        });

        loadBtn.style.display = "none";
    });
}
});
