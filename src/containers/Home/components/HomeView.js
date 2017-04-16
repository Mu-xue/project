import React from 'react'
import './HomeView.scss'
import { Jumbotron, Button } from 'react-bootstrap'

export const HomeView = () => (
    <Jumbotron>
        <h1>这是主页</h1>
        <p>这是一些描述</p>
        <p><Button bsStyle='primary'>Learn more</Button></p>
    </Jumbotron>
)

export default HomeView
