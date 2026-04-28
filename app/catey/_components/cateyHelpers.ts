import { cateyConfig } from "../../../translations/catey";

// Some browsers (notably Brave with shields up) and some VPN/firewall setups
// block the wa.me redirector with a connection-reset. api.whatsapp.com is the
// canonical endpoint that wa.me itself forwards to, so we hit it directly and
// bypass the intermediate hop.
export function whatsappLink(message: string): string {
  return `https://api.whatsapp.com/send?phone=${cateyConfig.whatsappNumber}&text=${encodeURIComponent(message)}`;
}
