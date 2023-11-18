/* Usage
export default function Component() {
  useDocumentTitle('foo bar')
}
*/
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
export function useDocumentTitle(title: string): void {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title
  }, [title])
}