import { useEffect, useState } from "react";

// Defines a custom useDarkMode hook
export default function useDarkMode() {
    // Initialize the dark mode state to the value stored in localStorage, or to false if no value is stored
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ? true : false
    );

    useEffect(() => {
        // Update the body element's class to match the dark mode state
        if (darkMode) {
            // Add the "dark-mode" class when dark mode is enabled
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            // Remove the "dark-mode" class when dark mode is disabled
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Define a function to toggle the dark mode state
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Return the current dark mode state and the toggleDarkMode function
    return [darkMode, toggleDarkMode];
}
