import { useState, useEffect } from 'react';

export const useMobile = (): boolean => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const mobileCheck = window.matchMedia('(max-width: 768px)');
        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        // Set initial value
        setIsMobile(mobileCheck.matches);

        // Listen for changes in screen size
        mobileCheck.addEventListener('change', handleResize);

        // Cleanup
        return () => {
            mobileCheck.removeEventListener('change', handleResize);
        };
    }, []);

    return isMobile;
};

