"use server";

const NETWORK_DELAY_MS = 500;

export async function updateAmount(newAmount: number) {
  await new Promise((resolve) => setTimeout(resolve, NETWORK_DELAY_MS));
  return newAmount;
}
