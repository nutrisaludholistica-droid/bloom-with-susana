import { WHATSAPP_URL } from "@/lib/whatsapp";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-medium text-white shadow-xl shadow-olive/20 hover:scale-[1.03] transition"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Zm-5.43 7.39h-.01c-1.78 0-3.52-.48-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.55 9.55 0 0 1-1.47-5.1c0-5.27 4.3-9.56 9.58-9.56 2.56 0 4.97 1 6.78 2.81a9.51 9.51 0 0 1 2.8 6.76c0 5.27-4.3 9.56-9.58 9.56l.28-.84Zm8.15-17.71A11.4 11.4 0 0 0 13.68 3C7.36 3 2.22 8.13 2.22 14.44c0 2.02.53 4 1.54 5.75L2.13 26l5.95-1.56a11.5 11.5 0 0 0 5.5 1.4h.01c6.32 0 11.47-5.13 11.47-11.44A11.36 11.36 0 0 0 21.83 6.9Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
