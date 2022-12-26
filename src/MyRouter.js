import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Main from './Main'

const MyRouter = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Main />}></Route>
            </Routes>
        </Layout>
    )
}

export default MyRouter