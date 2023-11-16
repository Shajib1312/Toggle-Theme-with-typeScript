"use client";
import { createContext, ReactNode, useEffect, useState } from "react";


interface ThemeContextValue {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme: "light",
    toggleTheme: () => { },
});

const getFromLocalStorage = (): string => {
    if (typeof window !== "undefined") {
        let theme = localStorage.getItem("theme") || "light";
        return theme;
    }
    return "light";
};

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider = ({
    children
}: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<string>(getFromLocalStorage());

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);

    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
