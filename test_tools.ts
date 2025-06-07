#!/usr/bin/env bun

import tools from "./tools";

console.log("Available tools:");
tools.forEach((tool, index) => {
  console.log(`${index + 1}. ${tool.name}: ${tool.description}`);
  if (tool.name === "messages") {
    const properties = tool.inputSchema.properties as any;
    console.log("   Messages tool operations:", properties?.operation?.enum);
  }
});

console.log("\nTotal tools:", tools.length);

// Test that messages tool has correct structure
const messagesTool = tools.find(t => t.name === "messages");
if (messagesTool) {
  console.log("\nMessages tool found and properly configured!");
  const properties = messagesTool.inputSchema.properties as any;
  console.log("Operations:", properties?.operation?.enum);
} else {
  console.log("\nERROR: Messages tool not found!");
}
