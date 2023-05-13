import Search from './components/Search'
import searchImages from './api'
import ImageList from './components/ImageList'
import { useState } from 'react'
import './App.css'

function App() {
    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        // console.log('You have to search for: ',term)
        const result = await searchImages(term)
        // console.log(result.data.results)
        setImages(result.data.results)
    }

    return (
        <div>
            <div className='head'>
                <section className='top'>
                    <section className='cards-heading'>
                        Picser
                    </section>
                </section>
                <Search onSubmit={handleSubmit} />
            </div>
            <ImageList images={images} />
        </div>
    )
}

export default App