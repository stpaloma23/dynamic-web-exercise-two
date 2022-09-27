import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

function List() {
    console.log(Data)
    return (
        <main className="page-wrapper">
            <h1 className="title"> Articles</h1>

            {Data.map((article, i) => (
                <ArticleCard 
                    key={i}
                    blurb={article.blurb}
                    date={article.publishedDate}
                    title={article.title}
                    imageAlt={article.image.alt}
                    imageSrc={article.image.url}
                    id={article.id}
                />
            ))}
        </main>
    );
}

export default List;