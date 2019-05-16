Answer the following questions :
	1 Danh sách lồng nhau là danh sách được lồng trong 1 danh sách khác 
	2 Có

Exercise 1
	
	inventory = {
			    'gold' : 500,
			    'pouch' : ['flint', 'twine', 'gemstone'],
			    'backpack' : ['xylophone', 'dagger', 'bedroll', 'bread loaf']
				}
			inventory.pocket = ['seashell','strange berry','lint']
			inventory.backpack.splice(1,1);
			inventory.gold.push(50);


Exercise 2
let prices = {
	"banana": 6,
	"apple": 0,
	"orange": 32,
	"pear": 15

};
let stock = {
	"banana": 6,
	"apple": 0,
	"orange": 32,
	"pear": 15


};

let key = Object.keys(prices)
for (let i = 0; i < key.length; i++) {
    console.log(`*${key[i]}
  prices: ${prices[key[i]]}
  stock: ${stock[key[i]]}
        `)
};