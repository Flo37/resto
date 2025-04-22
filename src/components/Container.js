import React from 'react';

const Container = ({content}) => {
    const date=(date)=>{
        let newDate = new Date(date).toLocaleDateString('de',{
            year:'numeric',
            month:'long',
            day:'numeric',
            hour:'numeric',
            minute:'numeric',
            second:'numeric'
        })
        return newDate
    }
    return (
        <div className='comment'>
            <div className="header">
            <h2>{content.author}</h2>
            <span>{date(content.date)}</span>
            </div>
            <em>{content.comment}</em>
            <div className="buttons">
                <button>Edit</button>
                <button className='sec_btn'>Delete</button>
            </div>
        </div>
    );
};

export default Container;