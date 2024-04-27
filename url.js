// Function to check if a URL is valid
function isValidURL(url) {
  // Regular expression pattern for valid URLs
  const urlPattern = /^(http|https):\/\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]+$/;

  // Test if the input matches the regex pattern
  return urlPattern.test(url);
}

// Test cases
const testURLs = [
  "http://www.example.com",
  "https://example.com",
  "http://sub.example.com",
  "https://sub.example.com",
  "http://example.com/page123",
  "https://example.com/page123",
  "http://example.com/page123?q=123",
  "https://example.com/page123?q=123",
  "http://example.com/page123#section",
  "https://example.com/page123#section",
  "http://example.com/page123?q=123#section",
  "https://example.com/page123?q=123#section",
  "ftp://example.com", // Invalid protocol
  "http://example", // Missing top-level domain
  "http://example.", // Missing top-level domain
  "http://example.123", // Invalid top-level domain
  "example.com", // Missing protocol
  "example", // Invalid URL format
  "123", // Invalid URL format
  "", // Empty string
];

// Check each URL and print the result
testURLs.forEach((url) => {
  if (isValidURL(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
});
