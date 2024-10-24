import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getPictures = async (search, page) => {
  const response = await axios.get(`/?q=${search}&page=${page}&key=34209652-437fd061aa0754a74419b4413&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
};







// export function fetchPicture(name){
//     return fetch(`https://pixabay.com/api/?q={name}&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(
//         new Error(`Нет картинки с именем ${name}`)
//       );
//     }) 
//  };
//  const api= {fetchPicture}
 
//  export default api;