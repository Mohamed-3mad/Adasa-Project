import FaIcon from './FaIcon'

export default function ViewToggle({ view, onChange }) {
  return (
    <div className="inline-flex items-center gap-1 bg-ink-900 border border-ink-800 rounded-xl p-1">
      <button
        onClick={() => onChange('grid')}
        className={
          'w-9 h-9 rounded-lg flex items-center justify-center transition cursor-pointer ' +
          (view === 'grid' ? 'bg-brand text-white' : 'text-gray-400 hover:text-white')
        }
        aria-label="عرض شبكي"
      >
        <FaIcon name="grip" className="text-sm" />
      </button>
      <button
        onClick={() => onChange('list')}
        className={
          'w-9 h-9 rounded-lg flex items-center justify-center transition cursor-pointer ' +
          (view === 'list' ? 'bg-brand text-white' : 'text-gray-400 hover:text-white')
        }
        aria-label="عرض قائمة"
      >
        <FaIcon name="list" className="text-sm" />
      </button>
    </div>
  )
}
