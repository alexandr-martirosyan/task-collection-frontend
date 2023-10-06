import { ethers } from "ethers";

export const publicProvider = () => {
  try {
    return new ethers.BrowserProvider(window.ethereum);
  } catch (error) {
    console.error("error during provider instance creation")
  }
}