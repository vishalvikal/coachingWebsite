import axios from 'axios';


export function setTokenheader(token){
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  else{
    delete axios.defaults.headers.common['Authorization']
  }
}

/**
 * 
 * @param {string} method the HTTP verb you want to apply
 * @param {string} path the route path/ endpoint of the api
 * @param {object} data (optional) data in JSOn form for POST request
 */
export function apiCall(method, path, data){
                  return new Promise((resolve, reject)=>{
                    await axios[method.toLowerCase()](path, data).then(res=>{
                      return resolve(res.data);
                    }).catch(err=>{
                      return reject(err.response.data.error);
                    })
                  })


}