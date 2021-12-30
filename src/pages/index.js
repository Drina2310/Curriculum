import React from 'react'
import { Button } from 'react-bootstrap';
import BasicLayout from '../layouts/BasicLayout';
import "./index.scss";

export default function index() {
  return (
    <BasicLayout>
      <h1 className="title">Hola</h1>
      <Button variant="primary">Click me</Button>

      <Button variant="danger">Click me</Button>
    </BasicLayout>
  )
}

