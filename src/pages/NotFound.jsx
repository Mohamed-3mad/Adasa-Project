import { Link } from 'react-router-dom'
import FaIcon from '../components/FaIcon'

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>

      <div className="container-x relative text-center py-20">
        <div className="text-8xl md:text-[10rem] font-extrabold leading-none bg-linear-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent mb-4">
          404
        </div>
        <div className="w-16 h-1 bg-brand mx-auto rounded-full mb-8"></div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">عفواً! الصفحة غير موجودة</h1>
        <p className="text-gray-400 max-w-lg mx-auto mb-8 text-base md:text-lg">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary"><FaIcon name="house" /> الذهاب للرئيسية</Link>
          <Link to="/blog" className="btn-ghost"><FaIcon name="newspaper" /> تصفح المقالات</Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm">
          <a className="text-orange-500 hover:text-orange-400 hover:underline font-medium" href="/blog" data-discover="true">المدونة</a>
          <span className="text-neutral-600">•</span>
          <a className="text-orange-500 hover:text-orange-400 hover:underline font-medium" href="/about" data-discover="true">من نحن</a>
          </div>

      </div>
    </section>
  )
}
