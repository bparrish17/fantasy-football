import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export default function SiteLayout() {
  const navigate = useNavigate();
  const onMenuItemClick = (e) => {
    navigate(`/${e?.key}`)
  }

  return (
    <Layout style={{ width: '100vw', height: '100vh', overflow: 'scroll' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[0]}
          items={[{ key: 'rankings', label: 'Rankings '}]}
          style={{ flex: 1, minWidth: 0 }}
          onClick={onMenuItemClick}
        />
      </Header>
      <Content style={{ padding: '20px' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}