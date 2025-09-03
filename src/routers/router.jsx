import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../components/CategoryNews';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element : <HomeLayout></HomeLayout>,
            children : [
                {
                    path :"",
                    element : <Navigate to={'/category/01'}></Navigate>
                },
                {
                    path : '/category/:id',
                    element : <CategoryNews></CategoryNews>,
                    loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
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