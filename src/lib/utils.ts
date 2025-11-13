// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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

export function formatDate(dateObj: Date, withTime: boolean = false) {
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();

    let formattedDate = `${day}-${month}-${year}`;

    if (withTime) {
        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        formattedDate += ` ${hours}:${minutes}`;
    }

    return formattedDate;
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

// Tambahkan ini agar komponen bisa pakai cn()
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatLocalDatetime(date: Date | null | undefined): string {
    if (!date || isNaN(date.getTime())) {
        return '';
    }

    const pad = (num: number) => num.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hour}:${minute}`;
}
