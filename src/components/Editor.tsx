import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ParagraphNode } from 'lexical'

import { PagesBackdrop } from '@/components/pages/backdrop/PagesBackdrop'
import { PaginationPlugin } from '@/components/pages/pagination/PaginationPlugin'
import { StyledContentEditable } from '@/components/pages/StyledContentEditable'
import TreeViewPlugin from '@/components/utils/TreeViewPlugin'
import {
  ParagraphNodeWithMargin,
  paragraphWithMarginNodeReplacement,
} from '@/nodes/paragraphWithMarginNode'

export function Editor() {
  const onError = (error: Error) => {
    console.error(error)
  }

  const initialConfig = {
    namespace: 'main',
    nodes: [
      ParagraphNodeWithMargin,
      ParagraphNode,
      paragraphWithMarginNodeReplacement,
    ],
    theme: {},
    onError,
  }

  return (
    <div className="flex flex-col items-center relative">
      <LexicalComposer initialConfig={initialConfig}>
        <PagesBackdrop />
        <RichTextPlugin
          contentEditable={<StyledContentEditable />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <PaginationPlugin />
        <HistoryPlugin />
        <TreeViewPlugin />
      </LexicalComposer>
    </div>
  )
}
