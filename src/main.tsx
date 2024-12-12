import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import { client } from './utils/apollo.ts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home/index.tsx'
import Login from './containers/Login/index.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </ConfigProvider>
)
