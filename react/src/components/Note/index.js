
import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import iconPinUp from '../assets/icon-pin-up.svg';
import iconPinDown from '../assets/icon-pin-down.svg';
import './style.css';

const Note = ({ icon, title, description, footer }) => {

    const maxLength = 100;

    const [isHovered, setIsHovered] = useState(false);

    const sanitizedDescription = DOMPurify.sanitize(description);
    const shortDescription = sanitizedDescription.length > maxLength ? sanitizedDescription.substring(0, maxLength - 10) + '... ' : sanitizedDescription;
    const sanitizedFooter = DOMPurify.sanitize(footer);

    const displayDescription = useEffect(() => {
        isHovered ? sanitizedDescription : shortDescription;
    }, [isHovered]);
    const pinIconSrc = useEffect(() => {
        isHovered ? iconPinUp : iconPinDown;
    }, [isHovered]);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (<>
        <li className="npb_note" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onFocus={handleMouseOver} onBlur={handleMouseLeave}>
            <div className="npb_note_div">
                <div className="npb_note_pin_div">
                    <img alt="Pin" src={pinIconSrc} width="48" height="48" />
                </div>
                <p className="npb_note_title">{title}</p>
                {sanitizedDescription && (
                    <div className="npb_note_description" value={displayDescription}></div>
                )}
                {sanitizedFooter && (
                    <>
                        <hr />
                        <div className="npb_note_footer" value={sanitizedFooter}></div>
                    </>
                )}

            </div>
            <div className="npb_note_div_back"></div>
        </li >
    </ >
    );

};

export default Note;