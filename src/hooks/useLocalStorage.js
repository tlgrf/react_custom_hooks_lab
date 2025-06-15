import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  // this custom hook syncs a piece of state with localStorage
  // it tries to read the stored value first, or falls back to initialValue
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  // whenever the key or the state changes, update localStorage
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  // return the current value and a setter 
  return [value, setValue];
}