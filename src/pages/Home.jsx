import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext'
import BlogCard from '../components/BlogCard'
import Newsletter from '../components/Newsletter'
import FaIcon from '../components/FaIcon'

export default function Home() {
  const { posts, categories, siteInfo, loading } = useData()

  if (loading) {
    return <div className="container-x py-24 text-center text-gray-400">جاري تحميل المحتوى...</div>
  }

  const featured = posts.filter(p => p.featured).slice(0, 3)
  const latest = posts.slice(0, 3)

  const stats = [
    { icon: 'penNib', value: posts.length + '+', label: 'مقالة' },
    { icon: 'users', value: '10+ آلاف', label: 'قارئ' },
    { icon: 'folder', value: String(categories.length), label: 'تصنيفات' },
    { icon: 'penNib', value: String(new Set(posts.map(p => p.author.name)).size), label: 'كاتب' },
  ]

  const categoryIcons = {
    'إضاءة': 'gear',
    'بورتريه': 'user',
    'مناظر طبيعية': 'mountain',
    'تقنيات': 'sliders',
    'معدات': 'gear',
  }

  return (
    <div>
      <section className="relative overflow-hidden grid-bg">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="container-x py-20 md:py-28 relative text-center">
          <span className="chip mx-auto mb-6 bg-brand/10 border border-brand-dark/30 text-white">
            <span className="w-1 h-1 rounded-full bg-brand"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            مرحباً بك في {siteInfo?.name}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            اكتشف <span className="text-brand">فن</span><br />
            التصوير الفوتوغرافي
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            {siteInfo?.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/blog" className="btn-primary">
              <FaIcon name="arrowLeft" className="text-xs" />
              استكشف المقالات
            </Link>
            <Link to="/about" className="btn-ghost">
              <FaIcon name="question" />
              اعرف المزيد
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-ink-900/70 backdrop-blur border border-ink-800 rounded-2xl p-5 hover:border-brand/50 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3">
                  <FaIcon name={s.icon} />
                </div>
                <div className="text-2xl font-extrabold text-brand">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {featured.length > 0 && (
  <section className="container-x py-16">
    <div className="mb-10">
      <span className="chip mb-4 bg-brand/10 border border-brand-dark/30 text-white">
        <span className="w-1 h-1 rounded-full bg-brand"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
        مميز
      </span>

      <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
        مقالات مختارة
      </h2>

      <p className="text-gray-400">
        محتوى منتقى لبدء رحلة تعلمك
      </p>
    </div>

    <div className="flex flex-col gap-6">
      {featured.map(post => (
        
        <div
          key={post.id}
          className="grid lg:grid-cols-2 gap-6 card overflow-hidden"
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1 aspect-[4/3] lg:aspect-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 flex items-center gap-2">
          <span className="text-xs  text-white px-4 py-2 rounded-full font-medium bg-linear-to-l from-orange-300 to-orange-600 flex justify-center items-center gap-1">
            <FaIcon name="star" className="text-sm text-white" /> مميز
          </span>
          
        </div>
          </div>
          
          {/* Text */}
          <div className="p-8 md:p-10 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="chip chip-active bg-brand/10 py-2 px-4 text-brand border border-brand/30">
                {post.category}
              </span>

              <span className="text-xs text-gray-400 flex items-center gap-1">
                <FaIcon name="clock" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              {post.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                
                <div className='relative'>
                  <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-brand/30"
                />
                <span className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-brand"></span>
                </div>

                <div>
                  <div className="text-sm font-semibold">
                    {post.author.name}
                  </div>

                  <div className="text-xs text-gray-500">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <Link
                to={'/blog/' + post.id}
                className="text-brand font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                اقرأ المقال
                <FaIcon name="arrowLeft" />
              </Link>
            </div>
          </div>

          
        </div>
      ))}
    </div>
  </section>
)}

      <section className="container-x py-16">
        <div className="text-center mb-10">
          <span className="chip mx-auto mb-4 bg-brand/10 border border-brand/30 text-brand">
            <span className="w-1.5 h-1.5 rounded-full bg-brand "></span> <span className="w-2.5 h-2.5 rounded-full bg-brand "></span> التصنيفات
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">استكشف حسب الموضوع</h2>
          <p className="text-gray-400">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(c => (
            <Link
              key={c.name}
              to={'/blog?category=' + encodeURIComponent(c.name)}
              className="group bg-ink-900 flex justify-between items-center border border-ink-800 rounded-2xl p-6 text-center hover:border-brand/60 group-hover:-translate-y-1 group hover:bg-linear-to-l from-orange-300 to-orange-500 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand border border-brand/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 group-hover:text-white transition">
                  <FaIcon name={categoryIcons[c.name] || 'camera'} className="text-lg" />
                </div>
                <div className="font-bold mb-1">{c.name}</div>
                <div className="text-xs text-gray-500">{c.count} مقالات</div>
              </div>
              <div className='w-8 h-8 rounded-full p-2 text-center text-black group-hover:bg-white/20 group-hover:text-white transition-all'>
                <FaIcon name="angleLeft" className="text-sm mb-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="mb-10">
          <span className="chip mx-auto mb-4 bg-brand/10 border border-brand/30 text-brand">
            <span className="w-1.5 h-1.5 rounded-full bg-brand "></span> <span className="w-2.5 h-2.5 rounded-full bg-brand "></span> الأحدث
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">أحدث المقالات</h2>
          <p className="text-gray-400">محتوى جديد طازج من المطبعة</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {latest.map(p => <BlogCard key={p.id} post={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/blog" className="btn-primary">
            عرض جميع المقالات
            <FaIcon name="arrowLeft" className="text-xs" />
          </Link>
        </div>
      </section>

      <Newsletter />
    </div>
  )
}
