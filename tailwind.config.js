/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all source files for Tailwind classes
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // Tailwind default: 12px
        sm: "0.875rem", // Tailwind default: 14px
        base: "1rem", // Tailwind default: 16px
        lg: "1.125rem", // Tailwind default: 18px
        xl: "1.25rem", // Tailwind default: 20px
        "2xl": "1.5rem", // Tailwind default: 24px
        "3xl": "1.875rem", // Tailwind default: 30px
        "4xl": "2.25rem", // Tailwind default: 36px
        "5xl": "3rem", // Tailwind default: 48px
        "6xl": "3.75rem", // Tailwind default: 60px
        "7xl": "4.5rem", // Custom larger size: 72px
        "8xl": "6rem", // Custom larger size: 96px
        "9xl": "8rem", // Custom even larger size: 128px
      },
      fontWeight: {
        hairline: "100", // Tailwind default
        thin: "200", // Tailwind default
        light: "300", // Tailwind default
        normal: "400", // Tailwind default
        medium: "500", // Tailwind default
        semibold: "600", // Tailwind default
        bold: "700", // Tailwind default
        extrabold: "800", // Tailwind default
        black: "900", // Tailwind default
        extra: "950", // Custom extra-bold
      },
      lineHeight: {
        none: "1", // Tailwind default
        tight: "1.25", // Tailwind default
        snug: "1.375", // Tailwind default
        normal: "1.5", // Tailwind default
        relaxed: "1.625", // Tailwind default
        loose: "2", // Tailwind default
        "extra-loose": "2.5", // Custom extra-loose line height
      },
      letterSpacing: {
        tighter: "-0.05em", // Tailwind default
        tight: "-0.025em", // Tailwind default
        normal: "0em", // Tailwind default
        wide: "0.025em", // Tailwind default
        wider: "0.05em", // Tailwind default
        widest: "0.1em", // Tailwind default
        "extra-wide": "0.2em", // Custom extra-wide spacing
      },
      width: {
        1: "4px", // 4px size
        2: "8px", // 8px size
        4: "16px", // 16px size
        8: "32px", // 32px size
        16: "64px", // 64px size
        32: "128px", // 128px size
        64: "256px", // 256px size
        80: "320px", // 320px size
        96: "384px", // 384px size
        128: "512px", // Custom large width
        192: "768px", // Custom larger width
        256: "1024px", // Custom even larger width
        full: "100%", // Tailwind default
        screen: "100vw", // Tailwind default for full viewport width
      },
      height: {
        1: "4px", // 4px size
        2: "8px", // 8px size
        4: "16px", // 16px size
        8: "32px", // 32px size
        16: "64px", // 64px size
        32: "128px", // 128px size
        64: "256px", // 256px size
        80: "320px", // 320px size
        96: "384px", // 384px size
        128: "512px", // Custom large height
        192: "768px", // Custom larger height
        256: "1024px", // Custom even larger height
        full: "100%", // Tailwind default
        screen: "100vh", // Tailwind default for full viewport height
      },
      maxWidth: {
        1: "4px", // 4px size
        2: "8px", // 8px size
        4: "16px", // 16px size
        8: "32px", // 32px size
        16: "64px", // 64px size
        32: "128px", // 128px size
        64: "256px", // 256px size
        80: "320px", // 320px size
        96: "384px", // 384px size
        128: "512px", // Custom large width
        192: "768px", // Custom larger width
        256: "1024px", // Custom even larger width
        full: "100%", // Tailwind default
        screen: "100vw", // Tailwind default for full viewport width
      },
      minWidth: {
        1: "4px", // 4px size
        2: "8px", // 8px size
        4: "16px", // 16px size
        8: "32px", // 32px size
        16: "64px", // 64px size
        32: "128px", // 128px size
        64: "256px", // 256px size
        80: "320px", // 320px size
        96: "384px", // 384px size
        128: "512px", // Custom large width
        192: "768px", // Custom larger width
        256: "1024px", // Custom even larger width
        full: "100%", // Tailwind default
        screen: "100vw", // Tailwind default for full viewport width
      },
      maxHeight: {
        height: {
          1: "4px", // 4px size
          2: "8px", // 8px size
          4: "16px", // 16px size
          8: "32px", // 32px size
          16: "64px", // 64px size
          32: "128px", // 128px size
          64: "256px", // 256px size
          80: "320px", // 320px size
          96: "384px", // 384px size
          128: "512px", // Custom large height
          192: "768px", // Custom larger height
          256: "1024px", // Custom even larger height
          full: "100%", // Tailwind default
          screen: "100vh", // Tailwind default for full viewport height
        },
      },
      minHeight: {
        height: {
          1: "4px", // 4px size
          2: "8px", // 8px size
          4: "16px", // 16px size
          8: "32px", // 32px size
          16: "64px", // 64px size
          32: "128px", // 128px size
          64: "256px", // 256px size
          80: "320px", // 320px size
          96: "384px", // 384px size
          128: "512px", // Custom large height
          192: "768px", // Custom larger height
          256: "1024px", // Custom even larger height
          full: "100%", // Tailwind default
          screen: "100vh", // Tailwind default for full viewport height
        },
      },
      spacing: {
        1: "4px", // Tailwind default: 4px
        2: "8px", // Tailwind default: 8px
        3: "12px", // Tailwind default: 12px
        4: "16px", // Tailwind default: 16px
        5: "20px", // Tailwind default: 20px
        6: "24px", // Tailwind default: 24px
        7: "28px", // Custom spacing values
        8: "32px", // Tailwind default: 32px
        10: "40px", // Tailwind default: 40px
        12: "48px", // Tailwind default: 48px
        14: "56px", // Custom value
        16: "64px", // Tailwind default: 64px
        20: "80px", // Tailwind default: 80px
        24: "96px", // Tailwind default: 96px
        28: "112px", // Custom value
        32: "128px", // Tailwind default: 128px
        36: "144px", // Custom value
        40: "160px", // Custom value
        44: "176px", // Custom value
        48: "192px", // Tailwind default: 192px
        52: "208px", // Custom value
        56: "224px", // Custom value
        60: "240px", // Custom value
        64: "256px", // Tailwind default: 256px
        72: "288px", // Custom value
        80: "320px", // Custom value
        96: "384px", // Tailwind default: 384px
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)", // Extra small shadow
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // Tailwind default
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Tailwind default
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Tailwind default
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // Tailwind default
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)", // Tailwind default
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)", // Custom larger shadow
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)", // Tailwind default
        none: "none", // Tailwind default
        soft: "0 50px 100px -20px rgba(0, 0, 0, 0.15)", // Custom softer shadow
        intense: "0 50px 100px -20px rgba(0, 0, 0, 0.5)", // Custom intense shadow
      },
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2x large devices
        "3xl": "1920px", // 3x large devices (e.g., larger desktops)
        "4k": "2560px", // 4K resolution
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
