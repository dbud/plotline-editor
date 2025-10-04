import { ContentEditable } from '@lexical/react/LexicalContentEditable'

import { usePageSetup } from '@/components/pages/page-setup/usePageSetup'

export function StyledContentEditable() {
  const { dimensions, margins } = usePageSetup()
  return (
    <ContentEditable
      className="resize-y block outline-0 my-8 z-10 text-stone-900"
      style={{
        minHeight: dimensions.height,
        width: dimensions.width,
        paddingLeft: margins.left,
        paddingRight: margins.right,
        paddingTop: margins.top,
        paddingBottom: margins.bottom,
      }}
    />
  )
}
