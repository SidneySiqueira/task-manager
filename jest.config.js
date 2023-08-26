module.exports = {
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  
    testPathIgnorePatterns: ["/node_modules/", "/build/"],
  
    transformIgnorePatterns: ["/node_modules/"],
  
    testEnvironment: "jsdom",
  
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };
  