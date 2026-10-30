interface Offer {
    name: string;
    type: 'flat' | 'percent';
    value: number;
    minPrice: number;
}

function selectBestDiscount(price: number, offers: Offer[]): Offer | null {
    let bestOffer: Offer | null = null;
    let lowestPrice = price;

    for (const offer of offers) {
        if (price < offer.minPrice) {
            continue;
        }

        let discountedPrice: number;

        if (offer.type === "flat") {
            discountedPrice = price - offer.value;
        } else {
            discountedPrice = price - (price * offer.value / 100);
        }

        const finalPrice = Math.max(0, discountedPrice);

        if (finalPrice < lowestPrice) {
            lowestPrice = finalPrice;
            bestOffer = offer;
        }
    }

    return bestOffer;
}