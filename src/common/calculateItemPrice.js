const calculateItemPrice = async({ zone, organization_id, total_distance, item_type }) => {
    try {
        const baseDistance = 5
        const basePrice = 10
        const perisableItem = 1.5
        const nonPerisable = 1
        let finalPrice;

        if (total_distance <= 5) {
            finalPrice = 10
        } else if (total_distance > 5 && (item_type == 'perishable')) {
            finalPrice = basePrice + ((total_distance - baseDistance) * perisableItem);
        } else if (total_distance > 5 && (item_type == 'non-perishable')) {
            finalPrice = basePrice + ((total_distance - baseDistance) * nonPerisable);
        } else {
            finalPrice = null;
        }
        return finalPrice;

    } catch (error) {
        console.log(error, "error")
    }
}

module.exports = calculateItemPrice;