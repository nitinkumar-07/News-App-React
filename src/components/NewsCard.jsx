import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/images.jpg'

const NewsCard = ({ article }) => {
    const { source, author, title, description, url, urlToImage, publishedAt } = article

    return (
        <div className=' bg-[#ebe9e9f0] dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300'>
            <img src={urlToImage?urlToImage:image} alt={title} className='w-full h-40 object-cover bg-gray-400' />
            <div className='p-3'>
                <Link to={url}>
                    <h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 transition'>
                        {title}
                    </h2>
                </Link>
                <p className='text-sm text-gray-600 dark:text-gray-300 mt-2'>{description?.length>100? description.slice(0,100)+"...":description}</p>
                <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                    <span>By {author|| "unknown"}</span>
                    <span> {new Date(publishedAt).toLocaleDateString()}</span>
                </div>
                <div className='mt-1 text-xs text-blue-500 dark:text-blue-500 font-medium'>
                    Source:{source.name}
                </div>
            </div>
        </div>
    )
}

export default NewsCard