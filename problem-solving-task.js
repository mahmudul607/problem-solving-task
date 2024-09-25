
const products = [
    {  name: 'Laptop', category: 'Electronics', price: 1200 },
    {  name: 'Shoes', category: 'Fashion', price: 100 },
    {  name: 'Headphones', category: 'Electronics', price: 200 },
    {  name: 'Ball', category: 'Game', price: 80 },
    {  name: 'Foot Ball', category: 'Game', price: 800 },
    {  name: 'Shirt', category: 'Fashion', price: 300 },
    {  name: 'Shirt', category: 'Fashion', price: 30 }
  ];
  
  
  let selectedCategory = ""; 
  let selectedPriceRange = [0, Infinity];
  let selectedName = "";
  
  
  function filterProducts() {
    let filteredProducts = products;
  
   
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
      console.log(selectedCategory)
    }
  
   
    else if (selectedPriceRange[0] > 0) {
      filteredProducts = filteredProducts.filter(
        product => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
      );
      console.log(selectedPriceRange)
    }
    else if(selectedName){
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase() === selectedName.toLowerCase())
      console.log(selectedName)
  
    }
  
  
  
    displayProducts(filteredProducts);
  }
  
  
  function displayProducts(productList) {
    console.log('Filtered Products:', productList);
  }
  
  
  function applyCategoryFilter(category) {
    selectedCategory = category;
    filterProducts(); 
  }
  
  function applyPriceFilter(min, max) {
    selectedPriceRange= [min, max];
    filterProducts(); 
  }
  function applyNameFilter(name){
    selectedName = name;
    filterProducts(); 
  }
  
  applyCategoryFilter('game');

  applyPriceFilter(50, 150);  
  applyNameFilter('Shirt') ;   
  