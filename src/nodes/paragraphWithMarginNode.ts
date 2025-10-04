import {
  $create,
  $getState,
  $setState,
  createState,
  type EditorConfig,
  type LexicalNode,
  ParagraphNode,
} from 'lexical'

const marginBottomState = createState('marginBottom', {
  parse: (value: unknown) => (typeof value === 'number' ? value : 0),
})

export class ParagraphNodeWithMargin extends ParagraphNode {
  $config() {
    return this.config('paragraph-with-margin', {
      extends: ParagraphNode,
      stateConfigs: [{ flat: false, stateConfig: marginBottomState }],
    })
  }

  createDOM(): HTMLElement {
    const dom = document.createElement('p')
    dom.style.marginBottom = `${this.marginBottom}px`
    return dom
  }

  updateDOM(prevNode: this, dom: HTMLElement, config: EditorConfig): boolean {
    const didUpdate = super.updateDOM(prevNode, dom, config)
    dom.style.marginBottom = `${this.marginBottom}px`
    return didUpdate || this.marginBottom !== prevNode.marginBottom
  }

  set marginBottom(value: number) {
    $setState(this, marginBottomState, value)
  }

  get marginBottom(): number {
    return $getState(this, marginBottomState)
  }
}

export function $createParagraphWithMarginNode(): ParagraphNodeWithMargin {
  // TODO set state?
  return $create(ParagraphNodeWithMargin)
}

export function $isParagraphWithMarginNode(
  node: LexicalNode | null | undefined,
): node is ParagraphNodeWithMargin {
  return node instanceof ParagraphNodeWithMargin
}

export const paragraphWithMarginNodeReplacement = {
  replace: ParagraphNode,
  with: (/* node: ParagraphNode */) => $createParagraphWithMarginNode(),
  withKlass: ParagraphNodeWithMargin,
}
