"use client";

/**
 * Safely sets a value in localStorage (client-side only)
 * @param {string} key - The key to set in localStorage
 * @param {any} value - The value to store (will be stringified)
 * @returns {boolean} - True if successful, false if not (or not on client-side)
 */
export const setLocalStorage = (key: any, value: any) => {
  // Only run on client side
  if (typeof window === "undefined") {
    console.warn("localStorage is not available on server-side");
    return false;
  }

  try {
    const valueToStore =
      typeof value === "string" ? value : JSON.stringify(value);
    window.localStorage.setItem(key, valueToStore);
    return true;
  } catch (error) {
    console.error("Error setting localStorage:", error);
    return false;
  }
};

/**
 * Safely gets a value from localStorage (client-side only)
 * @param {string} key - The key to get from localStorage
 * @returns {any} - The parsed value or null if not found or on server-side
 */
export const getLocalStorage = (key: any) => {
  // Only run on client side
  if (typeof window === "undefined") {
    console.warn("localStorage is not available on server-side");
    return null;
  }

  try {
    const item = window.localStorage.getItem(key);
    if (item === null) return null;

    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  } catch (error) {
    console.error("Error getting localStorage:", error);
    return null;
  }
};
