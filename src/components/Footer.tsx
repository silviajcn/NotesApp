import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

export const Footer = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = (): void => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, [])

    return (
        <footer>
            <div className='scrollToTop'>
                {isVisible && (
                    <div
                        className='back-top-container'
                        onClick={() => scrollToTop()}
                    >
                        <div className='indication'>
                            <FaAngleUp />
                        </div>
                    </div>
                )}
            </div>
        </footer>
    )
}