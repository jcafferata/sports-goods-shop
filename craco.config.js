const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@fonts": path.resolve(__dirname, "src/assets/fonts/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@styles": path.resolve(__dirname, "src/assets/styles/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@elements": path.resolve(__dirname, "src/components/elements/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
    },
  },
};
