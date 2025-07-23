import React from 'react'
import './App.css'

function Gallery() {
    const cards = [
        {
            title: "Street Art",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
            image: "danny-greenberg-wfRgbguMUHI-unsplash.jpg",
            btn: "Learn More"
        },
        {
            title: "Street Art",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
            image: "jonas-degener-N2ucuKloA34-unsplash.jpg",
            btn: "Learn More"
        },
        {
            title: "Street Art",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
            image: "karsten-winegeart-xxsQl8zTdps-unsplash.jpg",
            btn: "Learn More"
        },
        {
            title: "Street Art",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
            image: "marek-piwnicki-kgFdZvtyW4E-unsplash.jpg",
            btn: "Learn More"
        },
    ]


    return (


        <div className="gallery" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="card"
                    style={{
                        width: '250px',
                        height: '300px',
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        position: 'relative',
                        color: '#fff',
                        overflow: 'hidden',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}
                >
                    {/* Overlay content */}
                    <div className="card-content">
                        {/* Title - top left */}
                        <div className="card-title">{card.title}</div>

                        {/* Description - center */}
                        <div className="card-description">{card.description}</div>

                        {/* Button - bottom center */}
                        <button className="cardBtn">{card.btn}</button>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Gallery
