import React from "react";

function Article() {
    const backgroundImgUrl = "url('https://i0.wp.com/luamaralstudio.com/wp-content/uploads/2020/09/Aesthetic-fall-autumn-computer-wallpaper-backgrounds-desktop-31.png?resize=980%2C551')"
    return (
        <main className="article-page-wrapper">
            <header className="article-header" style={{backgroundImage: backgroundImgUrl,padding: "40px 25px"}}>
                <div className="article-page-header-text">
                    <h1>Article Title</h1>
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