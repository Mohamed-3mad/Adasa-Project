import FaIcon from './FaIcon'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <FaIcon
        name="search"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
      />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="ابحث في المقالات..."
        className="w-full bg-ink-900 border border-ink-800 rounded-full pr-11 pl-4 py-3 text-sm focus:outline-none focus:border-brand transition"
        aria-label="البحث في المقالات"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-ink-800 hover:bg-brand flex items-center justify-center transition"
          aria-label="مسح البحث"
        >
          <FaIcon name="xmark" className="text-[10px]" />
        </button>
      )}
    </div>
  )
}
