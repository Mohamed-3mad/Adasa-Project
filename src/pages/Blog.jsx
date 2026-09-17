import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useData } from '../context/DataContext'
import BlogCard from '../components/BlogCard'
import BlogListItem from '../components/BlogListItem'
import Pagination from '../components/Pagination'
import CategoryFilter from '../components/CategoryFilter'
import SearchBar from '../components/SearchBar'
import ViewToggle from '../components/ViewToggle'
import FaIcon from '../components/FaIcon'

const PER_PAGE = 6

export default function Blog() {
  const { posts, categories, loading } = useData()
  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const c = searchParams.get('category')
    setCategory(c || 'all')
  }, [searchParams])

  const filtered = useMemo(() => {
    let result = posts

    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase()
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q))
      )
    }

    return result
  }, [posts, category, search])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [search, category])

  const handleCategory = c => {
    setCategory(c)
    setPage(1)
    if (c === 'all') setSearchParams({})
    else setSearchParams({ category: c })
  }

  if (loading) {
    return <div className="container-x py-24 text-center text-gray-400">جاري تحميل المقالات...</div>
  }

  return (
    <div>
      <section className="relative overflow-hidden grid-bg border-b border-ink-800">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="container-x py-16 md:py-20 relative text-center">
          <span className="chip mx-auto mb-4 text-brand border border-brand/40">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>  <FaIcon name="newspaper" className="text-brand text-[10px]" /> مدونتنا
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
            استكشف <span className="bg-linear-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent">مقالاتنا</span>
          </h1>
          <p className="text-gray-400">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </section>

      <section className="container-x py-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
          <div className="lg:w-80">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <CategoryFilter categories={categories} active={category} onChange={handleCategory} />
          
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-400">
            عرض <span className="text-white font-semibold">{filtered.length}</span> مقالات
            {search && <span> لـ &quot;{search}&quot;</span>}
          </div>
          <ViewToggle view={view} onChange={setView} />
        </div>

        {paged.length === 0 ? (
          <div className="text-center py-20 bg-ink-900 border border-ink-800 rounded-3xl">
            <FaIcon name="search" className="text-4xl text-gray-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">لا توجد مقالات</h3>
            <p className="text-gray-500">جرّب تغيير كلمات البحث أو التصنيف</p>
          </div>
        ) : view === 'grid' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paged.map(p => <BlogCard key={p.id} post={p} />)}
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {paged.map(p => <BlogListItem key={p.id} post={p} />)}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />

        {totalPages > 1 && (
          <div className="text-center mt-4 text-xs text-gray-500">
            صفحة {page} من {totalPages}
          </div>
        )}
      </section>
    </div>
  )
}
