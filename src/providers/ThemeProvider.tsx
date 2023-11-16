"use client";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode; }) => {
    const { theme } = useContext(ThemeContext);
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    if (mount) {
        return <div className={theme}>{children}</div>;
    }

    return null;
};

export default ThemeProvider;
