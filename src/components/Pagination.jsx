import FaIcon from './FaIcon'

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  const pages = []
  for (let i = 1; i <= totalPages; i++) pages.push(i)

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-10 h-10 rounded-xl cursor-pointer bg-ink-900 border border-ink-800 hover:border-brand disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition"
        aria-label="الصفحة السابقة"
      >
        <FaIcon name="chevronRight" className="text-sm " />
      </button>
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={
            'w-10 h-10 rounded-xl font-medium transition cursor-pointer ' +
            (p === page
              ? 'bg-brand text-white'
              : 'bg-ink-900 border border-ink-800 hover:border-brand text-gray-300')
          }
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="w-10 h-10 rounded-xl cursor-pointer bg-ink-900 border border-ink-800 hover:border-brand disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition"
        aria-label="الصفحة التالية"
      >
        <FaIcon name="chevronLeft" className="text-sm" />
      </button>
    </div>
  )
}
