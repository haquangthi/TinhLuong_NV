import React from 'react';
import './style.css';
import Login from './Login';
import LoginProps from './LoginProps';
import ComponentDidMountDemo from './ComponentDidMountDemo';
import ContainerBootstrapDemo from './ContainerBootstrapDemo';
import UserTable from './UserTable';
import SanPham_NV from './SanPham_NV';

export default function App() {
  return (
    <div>
      {/* <LoginProps username="Thi" />
      <Login /> */}
      {/* <ComponentDidMountDemo /> */}
      <UserTable />
      {/* <SanPham_NV /> */}
    </div>
  );
}
