import React from "react";
import ArticleCard from "../components/ArticleCard";
function List() {
    return (
        <main className="page-wrapper">
            <h1 className="title"> Articles</h1>
            <ArticleCard imageAlt="hi" imageSrc="bye" />
            <ArticleCard />
            <ArticleCard />
        </main>
    );
}

export default List;