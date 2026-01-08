import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function buildWhatsAppLink(text: string, source?: string) {
    const phoneNumber = "5514997335195";
    const encoded = encodeURIComponent(text);
    let url = `https://wa.me/${phoneNumber}?text=${encoded}`;

    if (source) {
        const utm = encodeURIComponent(`utm_source=site&utm_medium=cta&utm_campaign=whatsapp&utm_content=${source}`);
        url += `%20%5B${utm}%5D`;
    }

    return url;
}
