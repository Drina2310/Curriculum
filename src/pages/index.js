import React from 'react'
import BasicLayout from '../layouts/BasicLayout';
import Profile from '../components/Profile';
import "./index.scss";

export default function Index() {
  return (
    <BasicLayout>
      <Profile />
      <h1 className="title">Estamos en la home</h1>
    </BasicLayout>
  )
}

