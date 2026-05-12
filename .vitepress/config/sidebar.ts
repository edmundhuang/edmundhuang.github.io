import type { ThemeConfig } from 'vitepress-carbon'
import { codingSidebar } from './sidebar/coding'
import { operationSidebar } from './sidebar/operation'
import { designSidebar } from './sidebar/design'
import { examplesSidebar } from './sidebar/examples'

export const sidebar: ThemeConfig['sidebar'] = {
  '/coding/': codingSidebar,
  '/operation/': operationSidebar,
  '/design/': designSidebar,
  '/examples/': examplesSidebar
}
