import useSwr from 'swr'
import { fetchArticle } from '../../../data'
import { useRouter } from 'next/router'
import sanitizeHtml from 'sanitize-html'

const ArticlePage = () => {
  const router = useRouter()
  const { articleId } = router.query

  const { data: article } = useSwr(
    `article-${articleId}`,
    fetchArticle(articleId),
  )

  if (!article) {
    return <div>loading</div>
  }

  return (
    <div>
      <div className="">
        <div className="">
          <h1>{article.title}</h1>
          <div>{article.published}</div>
          <div>{article.subtitle}</div>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
