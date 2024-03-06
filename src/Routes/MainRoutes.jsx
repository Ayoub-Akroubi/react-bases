import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Layouts  from './Pages/Layouts';
import Blogs from './Pages/Blogs';
import Contacts from './Pages/Contacts';
import HomePage from './Pages/HomePage';

export default function MainRoutes() {
  return <BrowserRouter>
        <Routes>
            <Route path='/' element={Layouts()}>
                <Route index element={<HomePage />}/>
                <Route path='/blogs' element={Blogs()}/>
                <Route path='/contact' element={Contacts()}/>

            </Route>
            
        </Routes>
    </BrowserRouter>
  
}
