﻿Avalancher

This is your new Play application
=================================

This file will be packaged with your application, when using `activator dist`. 


GET /api/areas -> Array of skikareas
GET /api/hotels/{city}  -> Array of hotelInfo

skiarea{
    name: string
    city: string
    avalancherisk: int [1-5]
    snowheigth: int (cm)
    freshSnowHeight: int (cm)
    liftCount: int
    openLiftCount: int
}

hotel {
    name: string
    city: string
    description: string
    stars: int [0-5]
    rating: double [0-10]
    img: string
    link: string
