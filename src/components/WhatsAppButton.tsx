export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5555996136663"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.478.654 4.804 1.792 6.82L2 30l7.368-1.768A13.93 13.93 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.538a11.516 11.516 0 0 1-5.876-1.606l-.42-.25-4.37 1.05 1.072-4.26-.274-.436A11.494 11.494 0 0 1 4.462 16c0-6.37 5.172-11.542 11.542-11.542S27.546 9.63 27.546 16c0 6.37-5.172 11.538-11.542 11.538zm6.328-8.644c-.347-.174-2.054-1.014-2.374-1.13-.32-.116-.553-.174-.786.174-.232.348-.9 1.13-1.103 1.362-.203.232-.406.26-.753.086-.347-.174-1.465-.54-2.79-1.72-1.03-.92-1.726-2.056-1.928-2.404-.202-.348-.022-.536.152-.71.156-.154.347-.405.52-.608.174-.202.232-.347.348-.578.116-.232.058-.434-.029-.608-.087-.174-.786-1.896-1.077-2.596-.283-.682-.572-.59-.786-.6l-.669-.012a1.28 1.28 0 0 0-.927.434c-.32.348-1.22 1.19-1.22 2.9 0 1.71 1.248 3.363 1.422 3.595.174.232 2.456 3.75 5.952 5.26.832.36 1.482.574 1.988.736.835.266 1.595.228 2.196.138.67-.1 2.054-.84 2.346-1.65.29-.812.29-1.51.203-1.656-.087-.145-.32-.232-.668-.405z"/>
      </svg>

      {/* Tooltip */}
      <span className="absolute right-16 bg-graphite-darker text-bg-primary text-xs font-sans font-medium px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        Falar pelo WhatsApp
      </span>

      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
      />
    </a>
  );
}
