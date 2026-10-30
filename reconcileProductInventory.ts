interface Inventory {
    [productId: string]: number;
}

interface Transaction {
    productId: string;
    type: 'in' | 'out';
    quantity: number;
}

function reconcileInventory(initialInventory: Inventory, transactions: Transaction[]): Inventory {
    const inventory: Inventory = Object.assign(
        Object.create(null),
        initialInventory
    );

    for (const transaction of transactions) {
        const { productId, type, quantity } = transaction;

        if (!Object.prototype.hasOwnProperty.call(inventory, productId)) {
            inventory[productId] = 0;
        }

        if (type === 'in') {
            inventory[productId] += quantity;
        } else if (type === 'out') {
            inventory[productId] = Math.max(0, inventory[productId] - quantity);
        }
    }

    return { ...inventory };
}