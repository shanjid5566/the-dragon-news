import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element : <HomeLayout></HomeLayout>,
            children : [
                {
                    path : '/category/:id',
                    element : <h2>hello</h2>
                }
            ]
        },
        {
            path: "*",
            element : <h2>Error</h2>
        }
    ]
) 

export default router;