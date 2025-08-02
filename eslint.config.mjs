import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "jsx-quotes": "off",                  // ✅ stop enforcing jsx quote style
      "react/no-unescaped-entities": "off", // ✅ allows ' and " in JSX text
      "prefer-const": "off",                // ✅ won't force you to use const instead of let
      "@next/next/no-img-element": "off",   // ✅ lets you use <img> tags
      "jsx-a11y/alt-text": "off",
      "@next/next/no-img-element": "off"

    },
  },
];

export default eslintConfig;
