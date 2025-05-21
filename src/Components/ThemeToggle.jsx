import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const storedTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light"); // do this line have any role
      setIsDarkMode(false);
    }
  }, [])
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }
  return <button onClick={toggleTheme} className={cn(
    "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-hidden"
  )}>{isDarkMode ? (
    <Sun className="h-6 text-yellow-300 w-6" />
  ) : (
    <Moon className="h-6 text-blue-900 w-6" />
  )}</button>
}

export default ThemeToggle
