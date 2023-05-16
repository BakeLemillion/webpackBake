import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import AboutPage from '../pages/about'
import Layout  from '@/components/layout'

function Routers() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default Routers
