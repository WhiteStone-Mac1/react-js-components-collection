import React from 'react'
import { Button as AntdButton } from 'antd'

const Button = ({text}) => {
  return <AntdButton type='primary' >{text}</AntdButton>
}

export default Button
