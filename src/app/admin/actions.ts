"use server";

export async function verifyAdminPassword(password: string) {
  // We grab the hidden password directly from the server environment
  const correctPassword = process.env.ADMIN_PASSWORD;
  
  // Optional: A tiny artificial delay to deter brute-force guessing
  await new Promise((resolve) => setTimeout(resolve, 400));

  // If it matches, return true. Otherwise, false.
  return password === correctPassword;
}