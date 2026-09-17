import { useData } from '../context/DataContext'
import { Link } from 'react-router-dom'
import FaIcon from '../components/FaIcon'

export default function About() {
  const { posts, categories, siteInfo, loading } = useData()

  if (loading) {
    return <div className="container-x py-24 text-center text-gray-400">جاري تحميل المحتوى...</div>
  }

  const authors = Array.from(new Map(posts.map(p => [p.author.name, p.author])).values())

  const stats = [
    { icon: 'users', value: '+2 مليون', label: 'قارئ شهري' },
    { icon: 'newspaper', value: '+' + posts.length , label: 'مقالة منشورة' },
    { icon: 'penNib', value: '+' + authors.length , label: 'كاتب خبير' },
    { icon: 'bookOpen', value: '+' + String(categories.length) , label: 'تصنيف' },
  ]

  const values = [
    { icon: 'bullseye', title: 'الجودة أولاً', desc: 'محتوى مدروس ومكتوب بخبرة' },
    { icon: 'bolt', title: 'تركيز عملي', desc: 'نصائح يمكنك تطبيقها اليوم' },
    { icon: 'handshake', title: 'المجتمع', desc: 'تعلم مع الفنانين المبدعين' },
    { icon: 'rotate', title: 'دائماً محدث', desc: 'أحدث الاتجاهات وأفضل الممارسات' },
  ]

  return (
    <div>
      <section className="relative overflow-hidden grid-bg border-b border-ink-800">
        <div className="absolute -top-32 right-1/3 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="container-x py-16 md:py-24 relative text-center">
          <span className="chip mx-auto mb-4 bg-brand/10 border border-brand/30 text-brand px-6 text-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span> من نحن
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 max-w-3xl mx-auto leading-tight">
            مهمتنا هي <span className="bg-linear-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent">الإعلام والإلهام</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">{siteInfo?.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="bg-ink-900/70 backdrop-blur border border-ink-800 rounded-2xl p-5">
                <div className=" rounded-xl text-brand flex items-center justify-center mx-auto mb-3">
                  <FaIcon name={s.icon} className='text-3xl' />
                </div>
                <div className="text-2xl font-extrabold bg-linear-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 flex justify-center items-center gap-3"> <span className="h-8 w-1 bg-brand bg-linear-to-b from-orange-300 to-orange-500"></span>
           قيمنا
           <span className="h-8 w-1 bg-brand bg-linear-to-b from-orange-300 to-orange-500"></span>
          </h2>
          <p className="text-gray-400">المبادئ التي توجه كل ما نقوم بإنشائه</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {values.map((v, i) => (
            <div key={i} className="bg-ink-900 border border-ink-800 rounded-2xl p-6 text-center group hover:border-brand/50 hover:bg-brand/10 transition">
              <div className=" rounded-2xl text-brand flex items-center justify-center mx-auto mb-4">
                <FaIcon name={v.icon} className="text-3xl" />
              </div>
              <h3 className="font-bold mb-2 group-hover:text-brand transition duration-150">{v.title}</h3>
              <p className="text-sm text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="text-center mb-12">
          <span className="chip mx-auto mb-4 text-xl px-6 text-brand border border-brand/40">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span> فريقنا
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">تعرف على كتابنا</h2>
          <p className="text-gray-400">فريقنا من المصورين والكتاب ذوي الخبرة</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {authors.map((a, i) => (
            <div key={i} className="bg-ink-900 border border-ink-800 rounded-2xl p-6 text-center hover:border-brand/50 transition group">
              <div className="relative inline-block mb-4">
                <img src={a.avatar} alt={a.name} className="w-20 h-20 rounded-full object-cover border-2 border-ink-700 group-hover:border-brand transition" />
                <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-brand border-2 border-ink-900 flex items-center justify-center">
                  <FaIcon name="check" className="text-[9px] text-white" />
                </span>
              </div>
              <div className="font-bold mb-1">{a.name}</div>
              <div className="text-xs text-brand">{a.role}</div>
              <div className="flex items-center justify-center gap-2 mt-4">
                {['linkedin', 'github', 'twitter'].map(s => (
                  <button key={s} className="w-8 h-8 rounded-lg bg-ink-800 cursor-pointer hover:bg-brand flex items-center justify-center text-gray-400 hover:text-white transition">
                    <FaIcon name={s} className="text-xs" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className=" py-16">
        <div className="relative overflow-hidden bg-linear-to-b from-brand-dark to-orange-400 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">لديك أسئلة؟ دعنا نتحدث!</h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={'mailto:' + (siteInfo?.email || '')} className="inline-flex items-center gap-2 bg-ink-950 hover:bg-black duration-300 hover:-translate-y-1 text-white font-semibold px-6 py-3 rounded-xl transition">
                <FaIcon name="envelope" /> تواصل معنا
              </a>
              <Link to="/blog" className="inline-flex items-center gap-2 bg-transparent hover:bg-white hover:text-black  backdrop-blur border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition">
                تصفح المقالات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
