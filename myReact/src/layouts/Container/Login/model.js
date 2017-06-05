import fetch from 'UTIL/fetch.js';

// var fetchLogin = (data) => fetch('/api/login', {
//     type: 'POST',
//     data: data
// })
var fetchLogin = (data) => fetch('http://localhost:3000/api/login',{
    type:"POST",
    data: data
})
export { fetchLogin };