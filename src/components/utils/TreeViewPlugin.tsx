import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { TreeView } from '@lexical/react/LexicalTreeView'

export default function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext()
  return (
    <TreeView
      viewClassName="text-stone-900 bg-stone-400/50 text-xs p-4 mt-8 rounded"
      editor={editor}
    />
  )
}
