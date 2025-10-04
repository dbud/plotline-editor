import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getRoot, type LexicalNode } from 'lexical'
import { useCallback, useLayoutEffect } from 'react'

import { usePageSetup } from '@/components/pages/page-setup/usePageSetup'
import { usePagination } from '@/components/pages/pagination/usePagination'
import { $isParagraphWithMarginNode } from '@/nodes/paragraphWithMarginNode'

export function PaginationPlugin() {
  const [editor] = useLexicalComposerContext()
  const { dimensions, margins } = usePageSetup()
  const { gap, updatePagination } = usePagination()

  const paginate = useCallback(() => {
    const updates: [LexicalNode, number][] = []
    const scheduleUpdate = (node: LexicalNode | null, value: number) => {
      if ($isParagraphWithMarginNode(node) && node.marginBottom !== value) {
        updates.push([node, value])
      }
    }

    const { height } = dimensions
    const { top, bottom } = margins

    let n = 1

    editor.read(() => {
      const root = $getRoot()
      let y = top
      let prev = null
      for (const node of root.getChildren()) {
        const dom = editor.getElementByKey(node.getKey())
        if (dom) {
          const { offsetHeight } = dom
          if (y + offsetHeight > height - bottom) {
            console.log('paragraph doesnt fit')
            if (!prev) {
              console.error('paragraph overflows the page')
            }
            const extra = height - y + gap + top
            if (extra < 0) {
              console.log('paragraph overflows the page extra', extra)
            }
            scheduleUpdate(prev, extra)
            y = top
            n += 1
          }
          else {
            scheduleUpdate(prev, 0)
          }
          y += offsetHeight
        }
        prev = node
      }
      if (prev) {
        scheduleUpdate(prev, height - bottom - y)
      }
    })

    updatePagination({ numberOfPages: n })

    if (updates.length > 0) {
      editor.update(() => {
        for (const [node, top] of updates) {
          if ($isParagraphWithMarginNode(node)) {
            node.marginBottom = top
          }
        }
      })
    }
  }, [editor, gap, updatePagination, dimensions, margins])

  useLayoutEffect(() => {
    return editor.registerUpdateListener(
      ({ dirtyElements, dirtyLeaves }) => {
        if (dirtyElements.size === 0 && dirtyLeaves.size === 0) return
        paginate()
      },
    )
  }, [editor, paginate])

  return null
}
