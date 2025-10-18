
import { useEffect, useState } from 'react'

function Github() {
   
    const [data, setData] = useState([])
    useEffect(() => {
       fetch('https://api.github.com/users/zakirtqvi')
       .then(response => response.json())
       .then(data => {
         console.log(data);
         setData(data);
       })
    }, [])

  return (
    <div className='flex justify-center items-center'>
       <img src={data.avatar_url} alt="avtar" className='h-20' /> 
       <p>Github Followers:{data.followers}</p>  
    </div>
  )
}

export default Github