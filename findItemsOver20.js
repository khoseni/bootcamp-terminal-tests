export default function findItemsOver20(item) {
    return item.filter(function(item) {
        return item.qty > 20;
    });
}
