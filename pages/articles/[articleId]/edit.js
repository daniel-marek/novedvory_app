import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Editor from '../../../components/Editor'
import useSwr from 'swr'
import { fetchArticle, patchArticle } from '../../../data'
import useRedirectIfNotAuthenticated from '../../../utils/useRedirectIfNotAuthenticated'
import styles from '../../../styles/Home.module.scss'

const ArticleEdit = () => {
  const router = useRouter()
  useRedirectIfNotAuthenticated()
  const { articleId } = router.query

  const { data: article } = useSwr(
    `article-${articleId}`,
    fetchArticle(articleId),
  )

  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('Klikni pro více informací')
  const [content, setContent] = useState('<p>Sem patří obsah</p>')

  const [saveLoading, setSaveLoading] = useState(false)

  useEffect(() => {
    if (article) {
      setTitle(article.title)
      setSubtitle(article.subtitle)
      setContent(article.content)
    }
  }, [article])

  const onTitleChange = useCallback((e) => {
    setTitle(e.target.value)
  }, [])
  const onSubtitleChange = useCallback((e) => {
    setSubtitle(e.target.value)
  }, [])
  const onContentChange = useCallback((event, editor) => {
    const data = editor.getData()
    setContent(data)
  }, [])

  const onSave = useCallback(async () => {
    setSaveLoading(true)
    console.log('calling patchArticle')
    await patchArticle(articleId, {
      title,
      subtitle,
      content,
    })
    setSaveLoading(false)
  }, [title, subtitle, content, articleId])

  if (!article) {
    return <div>loading</div>
  }

  return (
    <div className={styles.container}>
      <h1>{title ? title : 'Nový článek'}</h1>
      <h3>Titul</h3>
      <input onChange={onTitleChange} value={title} />
      <h3>Podtitul</h3>
      <textarea onChange={onSubtitleChange} value={subtitle} />
      <h3>Obsah</h3>
      <div>
        <Editor data={content} onChange={onContentChange} />
      </div>

      <button onClick={onSave} disabled={saveLoading}>
        {saveLoading ? 'Ukládám' : 'Uložit'}
      </button>

      <button>
        <a href={`/dashboard`}>Vrátit se zpět</a>
      </button>
    </div>
  )
}

export default ArticleEdit
