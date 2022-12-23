module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": "eslint:recommended",
    "ignorePatterns": ["src/grpc/generated/**", "src/*.test.js"],
    "rules": {
    }
}
