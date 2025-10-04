import { usePageSetup } from '@/components/pages/page-setup/usePageSetup'
import { usePagination } from '@/components/pages/pagination/usePagination'

import { PageBackdrop } from './PageBackdrop'

export function PagesBackdrop() {
  const { dimensions } = usePageSetup()
  const { gap, numberOfPages } = usePagination()
  return (
    <div
      className={`
        absolute
        w-full h-[${numberOfPages * dimensions.height + (numberOfPages - 1) * gap}px]
        flex flex-col
        items-center overflow-x-hidden overflow-y-scroll
        py-8
      `}
    >
      <div className="flex flex-col" style={{ gap: `${gap}px` }}>
        {Array.from({ length: numberOfPages }, (_, i) => (
          <PageBackdrop key={i} />
        ))}
      </div>
    </div>
  )
}
