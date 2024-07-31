export default function fromWhere(item) {
    if (item.startsWith("CY")) {
        return "Bellville";
    } else if (item.startsWith("CJ")) {
        return "Paarl";
    } else if (item.startsWith("CA")) {
        return "Cape Town";
    } else {
        return "Some other place!";
    }
}