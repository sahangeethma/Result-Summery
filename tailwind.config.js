/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        LightRed: "hsl(0, 100%, 67%)",
        OrangeyYellow: "hsl(39, 100%, 56%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)",
        // Primary transparent
        LightRedTr: "hsla(0, 100%, 67%, 0.05)",
        OrangeyYellowTr: "hsla(39, 100%, 56%, 0.05)",
        GreenTealTr: "hsla(166, 100%, 37%, 0.05)",
        CobaltBlueTr: "hsla(234, 85%, 45%, 0.05)",
        // Neutral Colors
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
        // Gradient Colors
        // Background
        LightSlateBlue: "hsl(252, 100%, 67%)",
        LightRoyalBlue: " hsl(241, 81%, 54%)",
        // Circle
        VioletBlue: "hsla(256, 72%, 46%, 1)",
        PersianBlue: "hsla(241, 72%, 46%, 0)",
      },
      fontFamily: {
        body: ["Hanken Grotesk"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
