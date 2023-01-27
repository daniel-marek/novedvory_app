import {useCallback} from "react";
import {useRouter} from "next/router";
import {createNewArticle, fetchArticles, deleteArticle, patchArticle} from "../../data";
import useRedirectIfNotAuthenticated from "../../utils/useRedirectIfNotAuthenticated";
import Link from "next/link";
import useSwr from 'swr';

const Dashboard = () => {
  const router = useRouter();
  useRedirectIfNotAuthenticated()


  const {data: articles, mutate } = useSwr('articles', fetchArticles);

  const onCreateNewArticle = useCallback(async () => {
    const articleId = await createNewArticle();
    router.push(`/articles/${articleId}/edit`);
  }, [router])

  const onDeleteArticle = useCallback(async (articleId) => {
    await deleteArticle(articleId);
    await mutate()
  }, [mutate])

  const onTogglePublish = useCallback(async (article) => {
    await patchArticle(article.id, {
      isPublished: !article.isPublished,
      publishedTimeStamp: article.isPublished ? null : new Date().getTime()
    })
    await mutate()
  }, [mutate])

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Articles</h3>
      {articles ? articles.map((article) => (
        <div key={article.id}>
          <Link href={`/articles/${article.id}/edit`}>
            <a>{article.title}</a>
          </Link>
          <div>{article.subtitle}</div>
          {article.isPublished ? (
            <div>Published: {new Date(article.publishedTimeStamp).toLocaleDateString()}</div>) : null}
          <button onClick={() => onDeleteArticle(article.id)}>delete article</button>
          <button onClick={() => onTogglePublish(article)}>{article.isPublished ? 'Unpublish' : 'Publish'}</button>
        </div>
      )) : <div>Loading articles</div>}
      <button onClick={onCreateNewArticle}>Create new article</button>
    </div>
  );
}

export default Dashboard;