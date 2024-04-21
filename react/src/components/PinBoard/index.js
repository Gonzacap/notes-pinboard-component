import React from 'react';
import Note from '../Note';
import './style.css';

const PinBoard = ({ noteList }) => {

    const centerOnFocus = (itemId) => {
        const element = document.getElementById(`npb_note-${itemId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', inline: "center" });
        }
    };

    return (
        <>
            <div className="npb_pinboard">
                <ul className="npb_pinboard_card_locations">
                    {Array.isArray(noteList) && noteList.map((note, index) => (
                        <Note
                            key={note?.id || index}
                            id={`npb_note-${note?.id || index}`}
                            icon={note?.icon}
                            title={note?.title}
                            description={note?.description}
                            footer={note?.footer}
                            onClick={() => centerOnFocus(note?.id || index)}
                        />
                    ))}
                </ul>
            </div >
        </>
    );
};

export default PinBoard;
