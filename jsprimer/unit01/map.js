class ShoppingCart{
    constructor(){
        this.items=new Map();
    }

    addItem(item){
        if(item === null){
            item=0;
        }
        const count= (this.items.get(item)) ?? 0;
        this.items.set(item,count+1);
    }

    getTotalPrice(){
        return Array.from(this.items).reduce((total,[item,count])=>{
            return total+item.price*count;
        },0);
    }

    toString(){
        return Array.from(this.items).map(([item,count])=>{
            return `${item.name}:${count}`;
        }).join(",");
    }
}
const shoppingcart=new ShoppingCart();
const shopItems=[
    {name:"orange",price:140},
    {name:"apple",price:204},
]

for(let i = 0;i < shopItems.length;i++){
    shoppingcart.addItem(shopItems[0]);
    shoppingcart.addItem(shopItems[1]);
    shoppingcart.addItem(shopItems[1]);
    shoppingcart.addItem(shopItems[0]);
    shoppingcart.addItem(shopItems[1]);
    shoppingcart.addItem(shopItems[1]);
}

console.log(shoppingcart.getTotalPrice());
console.log(shoppingcart.toString());