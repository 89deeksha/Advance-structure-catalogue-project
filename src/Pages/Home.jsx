import React from 'react'
import data from '../Data/data.json'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const grouped = data.reduce((acc, Item) => {
        if (!acc[Item.category]) acc[Item.category] = []
        acc[Item.category].push(Item)
        return acc
    }, {})

    return (
        <div className='p-6'>
            {Object.keys(grouped).map((category) => (
                <div key={category} className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                        {category}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {grouped[category].map((Item, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    navigate(`/item/${Item.itemname}`, { state: Item })
                                }
                                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition duration-300"
                            >
                                <img
                                    src={Item.image}
                                    alt={Item.itemname}
                                    className='w-full h-40 object-cover'
                                />
                                <div className="p-3">
                                    <h3 className="font-semibold text-lg">
                                        {Item.itemname}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home