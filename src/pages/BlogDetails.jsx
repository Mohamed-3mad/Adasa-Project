import { Link, useParams, Navigate } from 'react-router-dom'
import { useData } from '../context/DataContext'
import BlogCard from '../components/BlogCard'
import { useMemo } from 'react'
import FaIcon from '../components/FaIcon'

export default function BlogDetails() {
  const { id } = useParams()
  const { posts, loading } = useData()
  const post = posts.find(p => String(p.id) === String(id))

  const related = useMemo(() => {
    if (!post) return []
    return posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3)
  }, [post, posts])

  // Build TOC from "## " headings
  const toc = useMemo(() => {
    if (!post?.content) return []
    return post.content
      .split('\n\n')
      .filter(b => b.startsWith('## '))
      .map((b, i) => ({
        index: i + 1,
        title: b.replace('## ', '').trim(),
        anchor: 'section-' + (i + 1),
      }))
  }, [post])

  if (loading) {
    return (
      <div className="container-x py-24 text-center text-gray-400">
        جاري تحميل المقال...
      </div>
    )
  }
  if (!post) return <Navigate to="/404" replace />

  const formatDate = d =>
    new Date(d).toLocaleDateString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  const blocks = (post.content || '').split('\n\n').filter(Boolean)

  // counters for section anchors
  let sectionCounter = 0

  return (
    <article>
      {/* ============ HERO ============ */}
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/20"></div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-x pb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-brand mb-4 transition"
            >
              <FaIcon name="arrowRight" className="text-xs" /> العودة إلى المقالات
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="chip chip-active">{post.category}</span>
              {post.featured && (
                <span className="chip">
                  <FaIcon name="star" className="text-brand text-[10px]" /> مميز
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand/40"
                />
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-xs text-gray-400">{post.author.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ BODY + SIDEBAR ============ */}
      <div className="container-x py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          {/* -------- MAIN CONTENT -------- */}
          <div className="order-2 lg:order-1">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>

            <div className="space-y-5 text-gray-300 leading-loose">
              {blocks.map((block, i) => {
                if (block.startsWith('## ')) {
                  sectionCounter += 1
                  return (
                    <h2
                      key={i}
                      id={'section-' + sectionCounter}
                      className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-3 flex items-center gap-3 scroll-mt-28"
                    >
                      <span className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <FaIcon name="camera" className="text-lg" />
                      </span>
                      {block.replace('## ', '')}
                    </h2>
                  )
                }
                return (
                  <p key={i} className="text-base md:text-lg">
                    {block}
                  </p>
                )
              })}
            </div>

            {/* Tags */}
            {(post.tags || []).length > 0 && (
              <div className="mt-10 pt-6 border-t border-ink-800">
                  <span className="text-xl text-white mb-4 ml-1 flex items-center gap-2">
                    <FaIcon name="tags" className="text-brand p-3 w-5 h-10 bg-dark border rounded-xl border-orange-900 " /> الوسوم
                  </span>
                  {post.tags.map(t => (
                    <span key={t} className="chip">
                      #{t}
                    </span>
                  ))}
              </div>
            )}
       {/* 3) Share */}
              <div className="flex justify-between items-center mt-10 bg-ink-900 border border-ink-800 rounded-2xl p-5">
                <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                  <FaIcon name="share" className="text-brand p-3 w-5 h-10 bg-dark border rounded-xl border-orange-900" /> شارك المقال
                </h3>
                <div className="flex items-center gap-2">
                  {['twitter', 'facebook', 'linkedin', 'whatsapp'].map(s => (
                    <button
                      key={s}
                      className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-brand flex items-center justify-center transition text-gray-400 hover:text-white"
                      aria-label={`مشاركة عبر ${s}`}
                    >
                      <FaIcon name={s} className="text-sm" />
                    </button>
                  ))}
                </div>
              </div>
            {/* Author strip */}
            <div className="mt-10 bg-ink-900 border border-ink-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-brand/40"
              />
              <div className="text-center sm:text-right flex-1">
                <div className="text-xs text-brand font-semibold mb-1">الكاتب</div>
                <div className="text-lg font-bold mb-1">{post.author.name}</div>
                <div className="text-sm text-gray-400">{post.author.role}</div>
              </div>
              <button className="btn-primary">
                <FaIcon name="userPlus" /> متابعة
              </button>
            </div>
          </div>

          {/* -------- SIDEBAR -------- */}
          <aside className="order-1 lg:order-2">
            <div className="sticky top-24 space-y-5">
              {/* 1) Table of Contents */}
              {toc.length > 0 && (
                <div className="bg-ink-900 border border-ink-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                      <FaIcon name="list" className="text-xl" />
                    </span>
                    <h3 className="font-bold text-sm">محتويات المقال</h3>
                  </div>
                  <ol className="space-y-8">
                    {toc.map(item => (
                      <li key={item.anchor}>
                        <a
                          href={'#' + item.anchor}
                          className="flex items-center gap-3 text-sm text-gray-400 hover:text-brand transition group"
                        >
                          <span className="w-6 h-6 rounded-md bg-ink-800 group-hover:bg-brand/20 flex items-center justify-center text-[11px] text-gray-500 group-hover:text-brand transition shrink-0">
                            {item.index}
                          </span>
                          <span className="line-clamp-1">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* 2) Date + Read Time info cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-ink-900 border border-ink-800 rounded-2xl p-4 text-center">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center mx-auto mb-2">
                    <FaIcon name="clock" className="text-sm" />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {(post.readTime || '').replace(' للقراءة', '')}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">وقت القراءة</div>
                </div>
                <div className="bg-ink-900 border border-ink-800 rounded-2xl p-4 text-center">
                  <div className="w-9 h-9 rounded-lg bg-brand/10 text-brand flex items-center justify-center mx-auto mb-2">
                    <FaIcon name="calendar" className="text-sm" />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {new Date(post.date).toLocaleDateString('ar-EG', {
                      day: 'numeric',
                      month: 'long',
                    })}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">تاريخ النشر</div>
                </div>
                
              </div>
              <div className="bg-linear-to-br from-brand/15 to-brand/5 border border-brand/30 rounded-2xl p-5 text-center">
                <div className="w-11 h-11 rounded-xl bg-orange-900  text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-brand/30">
                  <FaIcon name="envelope" className="text-lg text-brand" />
                </div>
                <h3 className="font-bold text-sm mb-1">لا تفوّت جديدنا</h3>  
                <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">
                  اشترك للحصول على أحدث المقالات
                </p>
                <button className="w-full bg-brand hover:bg-brand-dark text-white text-xs font-semibold py-2.5 rounded-xl transition">
                  تصفح المزيد
                </button>
              </div>
            </div>
          </aside>
        </div>
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-ink-800">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">
              قد يعجبك أيضاً
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(r => (
                <BlogCard key={r.id} post={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}