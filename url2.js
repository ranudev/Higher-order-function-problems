// Function to check if a LinkedIn profile URL is valid
function isValidLinkedInURL(url) {
  // Regular expression pattern for valid LinkedIn profile URLs
  const urlPattern =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{3,28}[a-zA-Z0-9]\/?$/;

  // Test if the input matches the regex pattern
  return urlPattern.test(url);
}

// Test cases
const testURLs = [
  "https://www.linkedin.com/in/johndoe123",
  "https://www.linkedin.com/in/john-doe",
  "https://www.linkedin.com/in/john_doe",
  "https://www.linkedin.com/in/johndoe123/",
  "https://www.linkedin.com/in/abc123/",
  "https://www.linkedin.com/in/abc_def_123/",
  "https://www.linkedin.com/in/abc_def-123/",
  "https://www.linkedin.com/in/abc-def_123/",
  "https://www.linkedin.com/in/abc-def-123",
  "https://www.linkedin.com/in/abc123456789012345678901234567890",
  "https://www.linkedin.com/in/abc", // Too short
  "https://www.linkedin.com", // Missing profile ID
  "https://www.linkedin.com/in/", // Missing profile ID
  "https://www.linkedin.com/in/johndoe123/", // Trailing slash
  "https://www.linkedin.com/in/123456/", // Starts with number
  "https://www.linkedin.com/in/abc.def/", // Contains invalid character (.)
  "https://www.linkedin.com/invalid", // Invalid format
  "http://www.linkedin.com/in/johndoe123", // Wrong protocol
];

// Check each URL and print the result
testURLs.forEach((url) => {
  if (isValidLinkedInURL(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
});
