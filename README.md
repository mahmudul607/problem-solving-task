# problem-solving-task

 It's bug issue js code here use condition for filterProducts() function only for exicution one filter. 

 There is logical issue occurd here.
 here if and else if logic apply process is not allow for multiple filter at once but every filter is work separetly with several time
 
bug issue code:


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
    else if (selectedPriceRange[0] >= 1 & selectedPriceRange[1] > 1) {
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
  
//   applyCategoryFilter('game');

  applyPriceFilter(0, 0);  
//   applyNameFilter('Shirt') ;   
  

    when not apply any filter but logically not matching it console log initial products 
    




    output when category and price filter apply at once:

    PS D:\Job Task\problem-solving-task> node problem-solving-task
game
Filtered Products: [
  { name: 'Ball', category: 'Game', price: 80 },     
  { name: 'Foot Ball', category: 'Game', price: 800 }
]
game
Filtered Products: [
  { name: 'Ball', category: 'Game', price: 80 },     
  { name: 'Foot Ball', category: 'Game', price: 800 }
]
PS D:\Job Task\problem-solving-task> 

in this output filter apply category and price but product filter list update according to category but price filter can not update filtered product list. I show the solution for got update filtered product list according to filter category and price in the solution file.

In the solution file 

changes the if else condition 

when category filter updatedProduct list and  filtered product list filtered with price filter and update product list according to price.
same process applied for name filter and price filter.
when a user filter product according to category or name after that filter with these product with price filter.

solution code:


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
    else if(selectedName){
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase() === selectedName.toLowerCase())
        console.log(selectedName)

      
    
      }
  
   
   if (selectedPriceRange[0] >= 1 & selectedPriceRange[1] > 1) {
      filteredProducts = filteredProducts.filter(
        product => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
      );
      console.log(selectedPriceRange)
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

    
//   applyNameFilter('Shirt') ;   
  applyPriceFilter(50, 500);
  


