const ArticlePreview = ({ article }) => {
  return (
    <div className="news-cards">
      <div className="link-container">
        <a href={article.shortUrl} class="link-base" target="__blank">
          <div className="thumbnail-container">
            <img src={article.thumbnail} />
          </div>
          <h2 className="article-headline"> {article.headline} </h2>
        </a>
      </div>
    </div>
  );
};

export default ArticlePreview;
