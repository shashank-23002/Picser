import axios from 'axios'

const searchImages=async(term)=>{
    const result=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID jn4ECcwMcoaRkGIRNILA8rIDhQduIfMGr5vRACUbrdE',
        },
        params:
        {
            query:term,
        },
    })

    console.log(result);
    return result
}

export default searchImages

