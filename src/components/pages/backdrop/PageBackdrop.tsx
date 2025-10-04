import { usePageSetup } from '@/components/pages/page-setup/usePageSetup'

export function PageBackdrop() {
  const { dimensions, margins } = usePageSetup()
  const { top, right, bottom, left } = margins
  const { width, height } = dimensions
  return (
    <div
      className="bg-white shadow-lg rounded relative pointer-events-none"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        padding: `${top}px ${right}px ${bottom}px ${left}px`,
      }}
    >
      {/* margins */}
      {[
        [top, 0, 'w-full'],
        [height - bottom, 0, 'w-full'],
        [0, left, 'h-full'],
        [0, width - right, 'h-full'],
      ].map(([top, left, className], index) => (
        <div
          key={index}
          className={`absolute ${className} border-t border-l border-dashed border-blue-600/30`}
          style={{ top: `${top}px`, left: `${left}px` }}
        />
      ))}
    </div>
  )
}
