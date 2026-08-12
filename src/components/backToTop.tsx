 import { useState, useEffect } from "react";

 export default function BackToTop(){
    
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        // Show button when scrolled down more than 300px
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth", // Enables CSS-like smooth scrolling
        });
    };

    return (
        isVisible && (
        <button onClick={scrollToTop} className="back-to-top-btn">
            ↑ Top
        </button>
        )
    );
}