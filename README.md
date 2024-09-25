# problem-solving-task

 It's bug issue js code here use condition for filterProducts() function only for exicution one filter. 

 There is logical issue occurd here.
 here if and else if logic apply process is not allow for multiple filter at once but every filter is work separetly with several time
 
if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
      console.log(selectedCategory)
    }
  
   
    else if (selectedPriceRange[0] >= 1 &  selectedPriceRange[1] > 1) {
      filteredProducts = filteredProducts.filter(
        product => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
      );
      console.log(selectedPriceRange)
    }
    else if(selectedName){
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase() === selectedName.toLowerCase())
      console.log(selectedName)
  
    }

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


