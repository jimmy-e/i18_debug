const tailwindConfig = require('tailwind-config/tailwind.config');

// For `tailwind-config/tailwind.config.js`, `content` needs to be specified to our workspaces
// from a certain path. However, this path does not work for our root tailwind config file.
module.exports = {
  ...tailwindConfig,
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./packages/**/*.{js,ts,jsx,tsx}",
  ],
};
