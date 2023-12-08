/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];

  transactions.forEach(transaction => {
    //de-structure the transaction object
    const {category, price} = transaction;

    //if we find and entry in result to already having that category, then we edit its price
    const existingCategory = result.find(entry => entry.category === category);

    if (existingCategory !== undefined) {
      existingCategory.totalSpent += price;     //please keep track of correct variable names used bro takes tonne of time to find/look 
    }
    //else we just push it to result
    else {
      result.push({"category": category, "totalSpent": price});
    }
  })
  
  return result;
}

module.exports = calculateTotalSpentByCategory;
