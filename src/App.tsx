import { Editor } from '@/components/Editor'
import Layout from '@/components/Layout'
import { PageSetupProvider } from '@/components/pages/page-setup/PageSetupProvider'
import { ThemeProvider } from '@/components/theme/ThemeProvider'

import { PaginationProvider } from './components/pages/pagination/PaginationProvider'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <PageSetupProvider>
          <PaginationProvider>
            <Editor />
          </PaginationProvider>
        </PageSetupProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default App
