import {
  doc,
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
  addDoc,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore'
import { db } from './firebase'

export const fetchArticles = async () => {
  const articles = []
  const snapshot = await getDocs(collection(db, 'articles'))

  snapshot.forEach((doc) => {
    articles.push({
      id: doc.id,
      ...doc.data(),
    })
  })

  return articles
}

export const fetchArticlesForIndex = async () => {
  const articles = []
  const q = query(
    collection(db, 'articles'),
    where('isPublished', '==', true),
    orderBy('publishedTimeStamp', 'desc'),
    limit(3),
  )
  const snapshot = await getDocs(q)
  snapshot.forEach((doc) => {
    articles.push({
      id: doc.id,
      ...doc.data(),
    })
  })
  return articles
}

export const fetchArticle = (articleId) => async () => {
  const docRef = doc(collection(db, 'articles'), articleId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

export const deleteArticle = async (articleId) => {
  await deleteDoc(doc(db, 'articles', articleId))
}

export const patchArticle = async (
  articleId,
  data,
  options = { merge: true },
) => {
  console.log('patchArticle', articleId, data, options)
  await setDoc(doc(db, 'articles', articleId), data, options)
}

export const createNewArticle = async () => {
  const docRef = await addDoc(collection(db, 'articles'), {
    title: '',
    subtitle: '',
    content: null,
  })

  return docRef.id
}
