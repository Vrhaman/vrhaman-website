import nextConfigVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextConfigVitals,
  {
    rules: {
      "react-hooks/purity": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-img-element": "off",
    }
  }
];

export default eslintConfig;
