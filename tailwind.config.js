/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '769px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      gradientColorStops: {
        'callgradient': 'rgba(14, 29, 52, 0.6)',
      },
      backgroundImage: {
        'heroBg': "url('/img/hero-bg.png')",
        'callBg': "url('/img/cta-bg.jpg')",
      },
      colors: {
        Default: "#0a0d13",
        Primary: "#0d42ff",
        Secondary: "#0e1d34",
        White: "#fff",
        Blue: "#001f8d",
        callBgColor: "linear-gradient(rgba(14, 29, 52, 0.6),rgba(14, 29, 52, 0.6))",
        FbgColor: "#dee2e6",
      },
    },
  },
  plugins: [],
}

