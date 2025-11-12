export function toTitleCase(input: string): string {
    if (!input) {
        return "";
    }

    return input
        .split(/\s+/)
        .map(word => {
            if (word.length === 0) {
                return "";
            }

            return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
        })
        .join(' ');
}