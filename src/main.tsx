import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import { client } from './utils/apollo.ts'

import App from './App.tsx'
import './theme.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </ConfigProvider>
)
