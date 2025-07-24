import React from 'react';

function Card({ card }) {
    return (
        <div>
            <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
                {card.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
                    >
                        {/* Background Image */}
                        <img
                            src={item.img}
                            alt="card background"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />


                        {/* Dark Overlay */}
                        <div className="absolute bg-black opacity-50 inset-0"></div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 z-10">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-sm mb-1">{item.desc}</p>
                            <p className="text-sm italic">— {item.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
