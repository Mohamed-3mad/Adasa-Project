import FaIcon from './FaIcon'

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onChange('all')}
        className={'chip cursor-pointer ' +  (active === 'all' ? 'chip-active' : 'hover:border-brand/50')}
      >
        جميع المقالات
      </button>
      {categories.map(c => (
        <button
          key={c.name}
          onClick={() => onChange(c.name)}
          className={'chip cursor-pointer ' + (active === c.name ? 'chip-active' : 'hover:border-brand/50')}
        >
          {c.name}
          <span className="text-[10px] opacity-70">({c.count})</span>
        </button>
      ))}
    </div>
  )
}
