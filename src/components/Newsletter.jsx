import FaIcon from './FaIcon'

export default function Newsletter() {
  return (
    <section className="container-x my-16">
      <div className="relative overflow-hidden rounded-3xl bg-ink-900 border border-ink-800 p-8 md:p-14 text-center">
        <div className="absolute inset-0 grid-bg opacity-40"></div>
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand/30">
            <FaIcon name="envelope" className="text-white text-xl" />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            اشترك في <span className="bg-linear-to-l from-orange-300 to-orange-500 bg-clip-text text-transparent">نشرتنا الإخبارية</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>
          <form
            onSubmit={e => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="ادخل بريدك الإلكتروني"
              className="flex-1 bg-ink-800 border border-ink-700 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-brand transition"
            />
            <button className="btn-primary justify-center">اشترك الآن</button>
          </form>
          <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-500 flex-wrap">
            <div className="flex -space-x-2 space-x-reverse"><img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" /><img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" /><img className="w-8 h-8 rounded-full border-2 border-[#161616]" alt src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" /></div>

            <span className="flex items-center gap-1">
               انضم 10,000+ مصور
            </span>
            <span className="flex items-center gap-1">
               بدون إزعاج
            </span>
            <span className="flex items-center gap-1">
               إلغاء الاشتراك في أي وقت
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
