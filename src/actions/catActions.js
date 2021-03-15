export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
      .then(resp => resp.json())
      .then(respJson => dispatch({ type: 'ADD_CATS', cats: respJson.images }))
    }    
} 

// In this case, we just need the data inside "images", so we can pass that directly when calling the second dispatch.
// {
// "images": [
//     {
//       "url": "http://25.media.tumblr.com/tumblr_lyufg8UKQ51qgg1s9o1_500.jpg",
//       "id": "ajs",
//       "source_url": "http://thecatapi.com/?id=ajs"
//     }
// }