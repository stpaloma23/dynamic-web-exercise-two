import React from "react"

function ArticleCard({blurb, date, title, imageAlt, imageSrc, id}) {
    console.log(imageAlt, imageSrc)
    // TODO: go over the link 
    return (
        <div className="article-card-wrapper">
            <div className="article-card--photo">
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className="article-card--text">
                <h2>{title}</h2>
                <p className="article-card-date"> {date}</p>
                <p className="article-card-intro">{blurb}</p>
                <a href={`/article/${id}`} className="article-card-link">Read More</a>
            </div>
        </div>
    );
}

export default ArticleCard;