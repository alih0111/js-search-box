console.log("hi javaScript");
const productsDiv = document.querySelector(".searchres");

const products = [
  { title: "node js course" },
  { title: "mastering react js course" },
  { title: "advanced javascript js course" },
  { title: "git hub course" },
];

const filters = {
  searchItem: "",
};

function renderProducts(_product, _filters) {
  const filterProducts = _product.filter((item) => {
    return item.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
  });

  productsDiv.innerHTML = "";
  // add to DOM:
  filterProducts.forEach((el) => {
    const p = document.createElement("p");
    p.textContent = el.title;
    productsDiv.appendChild(p);
  });
}

renderProducts(products, filters);

const searchProduct = document.querySelector("input");
searchProduct.addEventListener("input", (e) => {
  filters.searchItem = e.target.value;
  renderProducts(products, filters);
});
