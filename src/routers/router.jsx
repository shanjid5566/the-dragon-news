import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element : <HomeLayout></HomeLayout>
        },
        {
            path: "*",
            element : <h2>Error</h2>
        }
    ]
) 

export default router;