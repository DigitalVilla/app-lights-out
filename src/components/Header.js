import React from 'react';

export default function Header ({title, subtitle, className}) {
    return (
        <div className={className}>
            <span className='neon-orange'>{title}</span>
            <span className='neon-blue'>{subtitle}</span>
        </div>
    )
}
