import React, {useMemo} from "react";
import { useParams } from "react-router";
import Data from "../components/data";

function Article() {
    const { id } = useParams(); // hook 
    const articleData = Data.find((article) => (
        article.id === id // finding where the article id in the list is equal to the article id of the specific article
    ))

    // using usememo from react library 
    const date = useMemo(() => {
        if(!articleData) return " ";
        const parsedDate = new Date(articleData.publishedDate);
        return parsedDate.toDateString();
    }, [articleData]);



    return (
        <main className="article-page-wrapper">
            <header 
                className="article-header" 
                style={{
                    backgroundImage: `url(${articleData.image.url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            >
                <div className="article-page-header-text">
                    <h1>{articleData.title}</h1>
                    <h2 className="article-date">{date}</h2>
                    <p className="article-blurb">{articleData.blurb}</p>
                </div>
            </header>
            <section className="article-contents">
                <div className="article-contents-wrapper">
                    {
                        articleData.articleText.map((text, i) => {
                            const type = text.type;
                            switch (type) {
                                case "h1":
                                    return <h1 key={i}>{text.data}</h1>;
                                case "h2":
                                    return <h2 key={i}>{text.data}</h2>; 
                                case "h3":
                                    return <h3 key={i}>{text.data}</h3>;     
                                case "h4":
                                    return <h4 key={i}>{text.data}</h4>;   
                                default:
                                    return <p key={i}>{text.data}</p>;
                            };
                        })
                    }
                </div>
            </section>
        </main>
    );
}

export default Article;