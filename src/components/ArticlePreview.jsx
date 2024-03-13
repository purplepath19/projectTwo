const ArticlePreview = ({ article }) => {
  return (
    <div>
      <img src={article.thumbnail} />
      <h2> {article.headline} </h2>
      <a href={article.shortUrl} target='__blank'>Link to full article article</a>
    </div>
  );
};

export default ArticlePreview;
