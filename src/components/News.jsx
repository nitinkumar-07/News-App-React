import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard';
import { Loader2 } from 'lucide-react';

const News = ({ category, articles, setArticles }) => {

    const API_KEY = "79701faa2c744d5c9c9a08ad790faba1"

    const [loading, setLoading] = useState(false)

    const fetchAllNews = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=35&apiKey=${API_KEY}`)

            setArticles(res.data.articles);
            console.log(res.data.articles);


        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        //fetchAllNews()
    }, [category])


    if (loading) return (
        <div className="bg-gray-200 dark:bg-gray-800 h-screen flex flex-col gap-3 items-center justify-center">
            <Loader2 className='h-12 w-12 animate-spin dark:text-gray-200' />
            <h1 className="text-gray-800 text-xl font-semibold dark:text-gray-200">
                Loading...
            </h1>
        </div>
    );

    return (
        <div>
            <div className='bg-[#a6a6e9] dark:bg-gray-800 py-24 px-4 md:px-4'>
                <div className='cards max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <NewsCard key={index} article={article} />
                        ))
                    ) : (
                        <p className="text pt-6  text-center text-gray-700 dark:text-gray-300 col-span-full "> 
                            No news found for this category/search 🔎
                        </p>
                    )}


                </div>
            </div>
        </div>
    );
}

export default News
