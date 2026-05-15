import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');

    const onCompleteRef = React.useRef(onComplete);
    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        // Reset the text when the input text changes
        setDisplayedText('');

        // If no text is provided, do nothing
        if (!text) return;

        // Use a local index
        let currentLength = 0;

        const timer = setInterval(() => {
            // Increment the index
            currentLength++;

            // Calculate the new text up to that index
            // (using substring ensures consistency in React)
            const nextText = text.substring(0, currentLength);
            setDisplayedText(nextText);

            // 5. Clear the interval when done
            if (currentLength >= text.length) {
                clearInterval(timer);
                // Call the onComplete callback if provided
                if (onCompleteRef.current) {
                    onCompleteRef.current();
                }
            }
        }, speed);

        // 6. Cleanup on unmount (cleanup function)
        return () => clearInterval(timer);

    }, [text, speed]); // Re-run the effect if the text or speed changes

    return <span>{displayedText}</span>;
};