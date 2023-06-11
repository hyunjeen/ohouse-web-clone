module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    "plugin:tailwindcss/recommended"
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ["*.js"],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    tailwindcss: {
      whitelist: ["swiper-pagination", "active"]
    }
  },
  rules: {
    'prettier/prettier': 'error',
    "@typescript-eslint/no-empty-function": ["off"],
    "import/no-anonymous-default-export": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
  },
};