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

export function formatDate(dateObj: Date) {
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
}

export function getInitials(name: string): string {
    if (!name) return "?";

    const names = name.split(' ').filter(Boolean);

    if (names.length === 0) return "?";

    let initials = "";

    initials += names[0][0];

    if (names.length > 1) {
        initials += names[names.length - 1][0];
    } else if (names[0].length > 1) {
        initials += names[0][1];
    }

    return initials.toUpperCase();
}