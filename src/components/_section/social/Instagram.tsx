import { useEffect } from "react";
export const Instagram = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/instagram.js';
        script.async = true;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);
    return (
        <div className="elfsight-app-5e67a9da-775d-4fd8-aec1-870afa371022" />
    )
}