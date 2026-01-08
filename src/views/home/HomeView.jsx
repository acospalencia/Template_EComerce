import React from 'react'
import { HomeGallery } from './components/HomeGallery'
import { HomeSearchBar } from './components/HomeSearchBar'
import { HomeProducts } from './components/HomeProducts'


export const HomeView = () => {
  return (
    <div>
      <main className="px-4 max-w-screen-md mx-auto">

        <div className="block md:hidden">
          <HomeSearchBar />
        </div>

      </main>

      <HomeGallery />
      <HomeProducts />
    </div>
  )
}



