import { Button, Form, ImageUploader, Input } from 'antd-mobile'
import classNames from 'classnames';
import { UPDATE } from './graphql/demo'
import { useMutation, } from '@apollo/client'
import { useEffect } from 'react'
import { useUploadOSS } from './hooks/useUploadOSS'

import styles from './App.module.less'
const App = () => {
  const uploadHandler = useUploadOSS();

  // const { loading, data } = useQuery(FIND, {
  //   variables: {
  //     id: '194add8d-0ab4-40ce-b50a-376fec919d16'
  //   }
  // })

  const [update] = useMutation(UPDATE);
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      'dark'
    )
  }, [])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandler = (v: any) => {
    update({
      variables: {
        id: '194add8d-0ab4-40ce-b50a-376fec919d16',
        params: {
          ...v
        }
      }
    })
  }

  return (<div className={styles.container}>
    <Form
      className={classNames(styles.form, styles.formPadding)}
      layout='horizontal'
      onFinish={onClickHandler}
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
    >
      <Form.Item
        name='name'
        label='姓名'
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="desc"
        label="描述"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="actor"
        label="头像"
      >
        <ImageUploader upload={uploadHandler} />
      </Form.Item>
    </Form>
  </div>)
}

export default App
