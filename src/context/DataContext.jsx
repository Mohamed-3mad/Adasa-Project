import { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [siteInfo, setSiteInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/data/posts.json')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setPosts(Array.isArray(data.posts) ? data.posts : [])
        setCategories(Array.isArray(data.categories) ? data.categories : [])
        setSiteInfo(data.siteInfo || null)
      } catch (err) {
        console.error('Failed to load data:', err)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return (
    <DataContext.Provider value={{ posts, categories, siteInfo, loading }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
