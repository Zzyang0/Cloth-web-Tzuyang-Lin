import React from 'react';

function Eachblog(props) {

    const data = props.blog;

    return (
        <div className="blog">
            < img src={data.img} alt={data.name}/>
            <div className="blogText">
                <p className="outfit_title">{data.name}'s Outfit</p >
                <p>{data.blogtext}</p >
                <button>Read More</button>
            </div>
        </div>
    )
}

export function Bloglist(props) {

    const blogs = props.blog;
    const blogdata = blogs.map((item) => {
        return <Eachblog blog={item} key={item.name} />;
    })
    


    return (
        <>
            <h1>BLOGS: Share Your #OOTD 🏷️</h1>
            <main class="allBlog">
                {blogdata}
            </main>
            <div align ="center">
                <button id="post_outfit">Post Your Outfit of the Day</button>
            </div>
        </>

    )
}