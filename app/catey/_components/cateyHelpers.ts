import { cateyConfig } from "../../../translations/catey";

export function whatsappLink(message: string): string {
  return `https://wa.me/${cateyConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
