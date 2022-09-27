import React from "react";
import { useParams } from "react-router";
import Data from "../components/data";

function Article() {
    const { id } = useParams(); // hook 
    const articleData = Data.find((article) => (
        article.id === id // finding where the article id in the list is equal to the article id of the specific article
    ))
    return (
        <main className="article-page-wrapper">
            <header className="article-header" style={{padding: "40px 25px"}}>
                <div className="article-page-header-text">
                    <h1>{articleData.title}</h1>
                    <h2 className="article-date"> March 23, 2001</h2>
                    <p className="article-blurb">this is the article blurb, its going to say something about the article</p>
                </div>
            </header>
            <section>
                <div className="article-contants-wrapper">
                    <p>
                        text from article
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Article;