module.exports = {
  // style everything within app folders that ends with this extensions
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "	#f6c492",
      },
    },
  },
  plugins: [],
};
