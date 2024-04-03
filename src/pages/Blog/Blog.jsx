import React from 'react'


const blogData = [
    {
        id : 1,
        image: "https://assets-global.website-files.com/62c56d1b8407c82b070a0d92/62ce6c617ec6b06192e12c1e_blog-06-p-500.jpg",
        date : "July 29, 2023",
        title: "This is why this year will be the year",
        description: "But because those who do not know how to pursue pleasure rationally encounter.",
    },
    {
        id : 2,
        image: "https://assets-global.website-files.com/62c56d1b8407c82b070a0d92/62ce6aefbbcee843691c17e9_blog-05-p-500.jpg",
        date : "July 29, 2023",
        title: "5 investment doubts you should clarify",
        description: "Duty or the obligations of business it will frequently occur that pleasures have to be.",
    },
    {
        id : 3,
        image: "https://assets-global.website-files.com/62c56d1b8407c82b070a0d92/62ce6a92570f8cf1bb1c37f0_blog-04-p-500.jpg",
        date : "July 29, 2023",
        title: "Ten questions you should answer truthfully.",
        description: "So blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.",
    },
    {
        id : 4,
        image: "https://assets-global.website-files.com/62c56d1b8407c82b070a0d92/62ce6a4e3ae3bcc82e415822_blog-03-p-500.jpg",
        date : "July 29, 2023",
        title: "5 reasons why you shouldn't startup",
        description: "Equal blame belongs to those who fail in their duty through weakness of will, which is the same.",
    },
    {
        id : 5,
        image: "https://assets-global.website-files.com/62c56d1b8407c82b070a0d92/62ce6a3c7ec6b07709e11bd4_blog-02-p-500.jpg",
        date : "July 29, 2023",
        title: "The pros and cons of business agency",
        description: "When our power of choice is untrammelled and when nothing prevents our being able.",
    },
    {
        id : 6,
        image: "https://assets-global.website-files.com/62c56d1b8407c82b070a0d92/62c6da2daaa28c85840a492a_blog-01-p-500.jpeg",
        date : "July 29, 2023",
        title: "There are many variations of passages",
        description: "But because those who do not know how to pursue pleasure rationally encounter.",
    },
]

const Blog = () => {
    return (
        <div>
            <div className="flex flex-row gap-5 justify-center items-center h-40 bg-yellow-200 font-bold text-3xl mt-10 my-10">
                <span className='text-6xl font-bold border '>Our blog</span>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-16  mx-10">
            {blogData.map((data) => (
                <div className="relative rounded-xl " key={data.id}>
                    <div className="mb-4">
                        <img src={data.image} alt="" className='w-full h-fit'/>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="space-y-3">
                            <p className='text-xs font-medium text-gray-500'>{data.date}</p>
                            <h1 className="text-xl font-bold text-black/80 dark: text-light">{data.title}</h1>
                            <p className='font-serif text-xl'>{data.description}</p>
                        </div>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
}

export default Blog