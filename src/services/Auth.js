export function hasAuthenticated(){
    if (localStorage.getItem('token'))
    {   return true;
     } 
     return false
}