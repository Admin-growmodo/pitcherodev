const pluginAspectRatio = require("@tailwindcss/aspect-ratio")
const pluginForms = require("@tailwindcss/forms")

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./config/*.json",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/**/*.liquid",
    "./scripts/**/*.js",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [
    "flex-row",
    "flex-row-reverse",
    {
      pattern: /grid-cols-(1|2|3)/,
      variants: ["sm", "md", "lg"],
    },
  ],
  theme: {
    screens: {
      mobile: "375px",
      xs: "480px",
      sm: "768px",
      md: "940px",
      lg: "1280px",
      laptop: "1360px",
      xl: "1440px",
      xxl: "1600px",

      "mobile-down": { max: "374px" },
      "xs-down": { max: "479px" },
      "sm-down": { max: "767px" },
      "md-down": { max: "939px" },
      "lg-down": { max: "1279px" },
      "laptop-down": { max: "1359px" },
      "xl-down": { max: "1439px" },
      "xxl-down": { max: "1599px" },
    },
    fontSize: {
      parent: "inherit",
      none: "0",
      base: ["var(--font-size-base)", { lineHeight: 1.5 }],
      10: ["0.625rem", { lineHeight: 1.5 }],
      11: ["0.6875rem", { lineHeight: 1.5 }],
      12: ["0.75rem", { lineHeight: 1.5 }],
      14: ["0.875rem", { lineHeight: 1.5 }],
      16: ["1rem", { lineHeight: 1.5 }],
      18: ["1.125rem", { lineHeight: 1.5 }],
      20: ["1.25rem", { lineHeight: 1.5 }],
      24: ["1.5rem", { lineHeight: 1.2 }],
      30: ["1.875rem", { lineHeight: 1.2 }],
      32: ["2rem", { lineHeight: 1.2 }],
      34: ["2.125rem", { lineHeight: 1.2 }],
      36: ["2.25rem", { lineHeight: 1.2 }],
      40: ["2.5rem", { lineHeight: 1.125 }],
      44: ["2.75rem", { lineHeight: 1.125 }],
      48: ["3rem", { lineHeight: 1.125 }],
      50: ["3.125rem", { lineHeight: 1.125 }],
      60: ["3.75rem", { lineHeight: 1.125 }],
      72: ["4.5rem", { lineHeight: 1.125 }],
    },
    zIndex: {
      "-1": "-1",
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
    },
    extend: {
      borderRadius: {
        8: "8px",
        10: "10px",
        13: "13px",
        15: "15px",
        16: "16px",
        25: "25px",
      },
      boxShadow: ({ theme }) => ({
        input:
          "0px 1px 1px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.12)",
        checked: `inset 0 0 0 4px ${theme("colors.brand.accent")}`,
      }),
      borderWidth: {
        3: "3px",
      },
      colors: {
        brand: {
          text: withOpacityValue("--color-text-body"),
          body: withOpacityValue("--color-background-body"),
          accent: "#43CD9E",
          primary: "#012130",
          secondary: "#085A7F",
          tertiary: "#00A0D1",
          black: "#2D3E45",
          gray: "#D9D9D9",
          red: "#A2001D",
          sale: "#D60000",
        },
      },
      cursor: {
        "zoom-in": "zoom-in",
      },
      dropShadow: {
        image: "0px 300px 70px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        inherit: "inherit",
        body: "var(--font-body-family)",
        heading: "var(--font-heading-family)",
      },
      gridTemplateColumns: {
        footer: "0.75fr 1.5fr 0.75fr",
      },
      lineHeight: {
        inherit: "inherit",
      },
      scale: {
        "-1": "-1",
        112: "1.12",
      },
      spacing: {
        0.75: "0.1875rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        15: "3.75rem",
        17: "4.375rem",
        18: "4.5rem",
        22: "5.5rem",
        22.5: "5.625rem",
        25: "6.25rem",
        26: "6.5rem",
        30: "7.5rem",
        35: "8.75rem",
        100: "25rem",
        108: "27rem",
        150: "37.5rem",
      },
      transitionTimingFunction: {
        card: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
      width: {
        "1/1": "100%",
      },
    },
  },
  plugins: [pluginAspectRatio, pluginForms],
}
