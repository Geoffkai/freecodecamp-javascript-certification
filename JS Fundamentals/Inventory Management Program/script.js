// ✅ 1. Declare an empty inventory array (can be initialized with items for testing)
let inventory = [{name: "flour", quantity: 5}, {name: "rice", quantity: 5}];

/**
 * ✅ 2. You should have a function named findProductIndex.
 * ✅ 3. findProductIndex("flour") should return the index of the object having name "flour".
 * ✅ 4. findProductIndex("FloUr") should work case-insensitively.
 * ✅ 5. findProductIndex("Flour") should return -1 if not found.
 */
function findProductIndex(productName){
    const lowerCaseName = productName.toLowerCase();

    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].name.toLowerCase() === lowerCaseName){
            return i;
        }
    }
    return -1;
}

/**
 * ✅ 6. You should have a function named addProduct.
 * ✅ 7. addProduct({name: "FLOUR", quantity: 5}) should add to existing quantity of "flour".
 * ✅ 8. Should log "flour quantity updated" if product exists.
 * ✅ 9. Should add new {name: "flour", quantity: 5} if not found.
 * ✅ 10. Should log "flour added to inventory" if newly added.
 */
function addProduct(productObject){
    const productIndex = findProductIndex(productObject.name);
    const lowerCaseName = productObject.name.toLowerCase();

    if(productIndex != -1){
        inventory[productIndex].quantity += productObject.quantity;
        console.log(`${lowerCaseName} quantity updated`);
    }else{
        inventory.push({name: lowerCaseName, quantity: productObject.quantity});
        console.log(`${lowerCaseName} added to inventory`);
    }
}

/**
 * ✅ 11. You should have a function named removeProduct.
 * ✅ 12. If product not found, log "flour not found".
 * ✅ 13. If found, subtract quantity.
 * ✅ 14. Log "Remaining flour pieces: X" if subtraction succeeds.
 * ✅ 15. If quantity becomes 0, remove product from inventory.
 * ✅ 16. If not enough quantity, log "Not enough flour available, remaining pieces: X".
 */
function removeProduct(productName, productQuantity){
    const lowerCaseName = productName.toLowerCase();
    const productIndex = findProductIndex(productName);

    if(productIndex != -1){
        if(inventory[productIndex].quantity - productQuantity > 0){
            inventory[productIndex].quantity -= productQuantity;
            console.log(`Remaining ${lowerCaseName} pieces: ${inventory[productIndex].quantity}`);
        }else if(inventory[productIndex].quantity - productQuantity == 0){
            inventory.splice(productIndex, 1);
        }else{
            console.log(`Not enough ${lowerCaseName} available, remaining pieces: ${inventory[productIndex].quantity}`);
        }
    }else{
        console.log(`${lowerCaseName} not found`);
    }
}
