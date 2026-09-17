import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext'
import FaIcon from './FaIcon'

export default function Footer() {
  const { siteInfo, categories } = useData()

  const socialIcons = {
    twitter: 'twitter',
    github: 'github',
    linkedin: 'linkedin',
    youtube: 'youtube',
    facebook: 'facebook',
    whatsapp: 'whatsapp',
  }

  return (
    <footer className="border-t border-ink-800 bg-ink-950 mt-16">
      <div className="container-x py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br text-center from-brand to-brand-dark flex items-center justify-center">
                <p className='text-2xl'>ع</p>
              </div>
              <div>
                <div className="font-extrabold text-lg">{siteInfo?.name || 'عدسة'}</div>
                
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {siteInfo?.description}
            </p>
            <div className="flex items-center gap-2">
              {siteInfo?.social && Object.entries(siteInfo.social).map(([key, url]) => (
                <a 
  key={key} 
  href={url} 
  target="_blank" 
  rel="noreferrer" 
  className="
    w-9 h-9
    rounded-lg
    bg-ink-900
    border border-ink-800
    hover:bg-brand
    hover:text-white
    flex items-center justify-center
    text-gray-400
    transition-all duration-300
    hover:scale-125
    hover:-translate-y-1
    hover:shadow-2xl
    relative
    z-10
  "
  aria-label={key} 
>
  <FaIcon name={socialIcons[key] || 'twitter'} />
</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-linear-to-l from-orange-300 to-orange-500"></span>
              استكشف
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand transition">الرئيسية</Link></li>
              <li><Link to="/blog" className="hover:text-brand transition">المدونة</Link></li>
              <li><Link to="/about" className="hover:text-brand transition">من نحن</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand bg-linear-to-l from-orange-300 to-orange-500"></span>
              التصنيفات
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {categories.map(c => (
                <li key={c.name}>
                  <Link to={'/blog?category=' + encodeURIComponent(c.name)} className="hover:text-brand transition">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand bg-linear-to-l from-orange-300 to-orange-500"></span>
              ابق على اطلاع
            </h4>
            <p className="text-sm text-gray-400 mb-3">اشترك للحصول على أحدث المقالات والتحديثات</p>
            <form onSubmit={e => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="ادخل بريدك الإلكتروني"
                className="w-full bg-ink-900 border border-ink-800 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand transition"
              />
              <button className="w-full cursor-pointer bg-brand hover:bg-brand-dark text-white font-semibold py-2.5 rounded-full transition">
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-800 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 {siteInfo?.name}. صنع بكل <span className='text-orange-500'>❤</span> جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand transition">سياسة الخصوصية</a>
            <a href="#" className="hover:text-brand transition">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
