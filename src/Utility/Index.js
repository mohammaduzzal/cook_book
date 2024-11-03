import toast from "react-hot-toast"

// 2 GET to LS
const getAllFavorites = ()=>{
    const all = localStorage.getItem('favorites')

    if(all){
        const fav = JSON.parse(all)
        return fav
    }
    else{
        return []
    }
}


// 1 ADD TO LS
const addFavorite = (coffee)=>{
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.id == coffee.id)
    if(isExist) return toast.error('already exist')
    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('coffee added successfully')
}


// 3 REMOVE FROM LS
const removeFavorite = id =>{
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('coffee  successfully removed')
}



export{addFavorite, getAllFavorites, removeFavorite}

