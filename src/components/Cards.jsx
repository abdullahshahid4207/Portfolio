import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div data-aos={props.animate} className={props.className} style={{ width: '18rem', textDecoration: 'none', margin: '10px' }}>
                <a target='_blank' href={props.link}>
                    <img src={props.src} className="card-img-top" alt="..." />
                </a>
                    <div className="card-body">
                        <h5 className="card-title card_title">{props.title}</h5>
                    </div>
            </div>
        </>
    )
}

export default Cards;