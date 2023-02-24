const axios = require("axios");


let arrayFavs = [];

const getCharById = async function(request, response){
    const {id} = request.params;
   
    try{
        const character = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    
        response.status(200).json(character.data); 
    }
    
    catch{
        response.status(404).json({error : error.message});
    }
}


const getCharDetail = async function(request, response){
    const {detailId} = request.params;

    try{
        const character = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    
        response.status(200).json(character.data); 
    }
    
    catch{
        response.status(404).json({error : error.message});
    }
}


const getFavorites = function(request, response){

    try {
        response.status(200).json(arrayFavs);
    } 
    
    catch (error) {
        response.status(404).json({error : error.message});
    }
}


const postFavorites = function(request, response){

    try {
        response.status(200).json(arrayFavs.push(request.body))
    } 

    catch (error) {
        response.status(404).json({error : error.message});
    }
}


const deleteFavorites = function(request, response){
    const {id} = request.params;

    try {
        arrayFavs = arrayFavs.filter(favorite => favorite.id !== id);
        response.status(200).json(arrayFavs);
    } 
    
    catch (error) {
        response.status(404).json({error : error.message});
    }
}


module.exports = {
    getCharById,
    getCharDetail,
    getFavorites,
    postFavorites,
    deleteFavorites
}