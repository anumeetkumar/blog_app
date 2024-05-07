/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          main: "var(--primary-color)",
          light: "#b0f7f4",
        },
        secondary: {
          main: "#00000099",
          main87: "#000000DE",
          lighterGray: "#F1F1F1",
          lightGray: "#C1C1C1",
          gray: "#4729ff14",
          darkGray: "#424242",
          blue: "var(--secondary-color)",
          labelBackground: "#46586B0A",
        },
        success: {
          main: "#2E7D32",
        },

        text: {
          primary: "#1A1A1A",
          disabled: "#878484e0",
          floatBalck: "#323232",
        },
        action: {
          focus: "#4729FF80",
        },
        error: {
          red: "#D32F2F",
        },
        status: {
          draft: "#EF6C0014",
          published: "#0288D114",
          warning: "#EF6C00",
          successLight: "#2E7D3214",
          notificationBack: "#0288D10A",
          disabled: "#0000001F",
        },
        icon: {
          darkGray: "#6D6E6E",
          lightGrey: "#0000008F",
          ignored: "#757575",
        },
      },
      rotate: {
        "36": "36.7deg",
      },
      boxShadow: {
        headerShadow:
          "0px 3px 9px -2px rgba(0, 0, 0, 0.10), 0px 4px 10px 0px rgba(0, 0, 0, 0.04), 0px 1px 15px 0px rgba(0, 0, 0, 0.02)",
        customShadow:
          "0px 3px 6px -2px rgba(0, 0, 0, 0.15), 0px 2px 7px 0px rgba(0, 0, 0, 0.04), 0px 1px 12px 0px rgba(0, 0, 0, 0.02)",
        menuShadow:
          "0px 5px 15px -3px rgba(0, 0, 0, 0.20), 0px 8px 18px 1px rgba(0, 0, 0, 0.14), 0px 3px 28px 2px rgba(0, 0, 0, 0.02)",
        aroundShadow: "-1px 0px 10px 0px rgba(0,0,0,0.75);",
        shadowww:
          "0px 2px 6px -1px #0000001A, 0px 1px 6px 0px #0000000A, 0px 1px 8px 0px #00000005",
      },
      fontSize: {
        xxxs: "0.625rem", //10px
        x: "0.75rem", // 12px
        xxs: "0.875rem", // 14px
        xs: "1rem", //16px
        s: "1.125rem", //18px
        sm: "1.25rem", //20px
        m: "1.375rem", //22px
        l: "1.5rem", //24px
        xl: "1.625rem", //26px
        xxl: "2rem", //32px
        "3xl": "2.125rem", //34px
        "4xl": "2.25rem", //36px
        "4.5xl": "2.5rem", //40px
        "5xl": "2.875rem", //46px
        "5.5xl": "3.25rem", //46px
        "6xl": "3.375rem", //54px
        "7xl": "3.875rem", //62px
        "8xl": "4.625rem", //74px
        "9xl": "3.875rem", //62px
        "10xl": "5.125rem", //82px
      },
    },
  },
  plugins: [],
};
