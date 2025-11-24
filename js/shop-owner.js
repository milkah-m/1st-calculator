/*Create a mini JavaScript program that helps a shop owner calculate:

Discount on an item
Profit after selling the item
Loss if the selling price is lower than the cost*/

let cost  = 70

let itemPrice=100
let discount=itemPrice*0.05
let sellingPrice=itemPrice-discount
console.log("Selling Price is " + sellingPrice)

if (sellingPrice > cost) {
console.log ("Profit is " + (sellingPrice-cost))
}

else {
    console.log ("Loss is " + (cost - sellingPrice))
}



