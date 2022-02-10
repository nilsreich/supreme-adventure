import { Layout, Page, Text, List } from '@vercel/examples-ui'
import Head from 'next/head'

export default function Index() {
  return (
    <>
<Head>        <link rel="manifest" href="/manifest.json" />
</Head>
    <Page>
      <Text variant="h2" className="mb-6">
Hallo      </Text>
      <List>
        <li>Username: 4dmin</li>
        <li>Password: testpwd123</li>
      </List>
    </Page>
    </>

  )
}

Index.Layout = Layout
