export function formatListOfItems(...items: string[]): String {
    if (items.length === 1) {
        return items[0];
    } else if (items.length === 2) {
        return `${items[0]} e ${items[1]}`;
    } else {
        const elements = items.slice(0, -1).join(", ");
        return `${elements}, e ${items[items.length - 1]}`;
    }
}

export function capitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}