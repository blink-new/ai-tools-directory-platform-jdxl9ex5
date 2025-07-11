import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { BrowsePage } from './pages/BrowsePage'
import { ToolDetailPage } from './pages/ToolDetailPage'
import { ComparisonPage } from './pages/ComparisonPage'
import { SubmitToolPage } from './pages/SubmitToolPage'
import { BlogPage } from './pages/BlogPage'
import { DashboardPage } from './pages/DashboardPage'
import { AdminPage } from './pages/AdminPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/browse/:category" element={<BrowsePage />} />
          <Route path="/browse/:category/:subcategory" element={<BrowsePage />} />
          <Route path="/tool/:slug" element={<ToolDetailPage />} />
          <Route path="/compare/:tool1/:tool2" element={<ComparisonPage />} />
          <Route path="/submit-tool" element={<SubmitToolPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App