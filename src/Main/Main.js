import { useState, useEffect } from 'react'
//import axios from 'axios'
const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {

        fetch('data.json'

            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )

            .then(function (response) {
                console.log(response)
                return response.json();
            })

            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });

    }

    /* const fetchData = async () => {
         const url = "../../public/data.json"
         try {
             const response = await fetch(url)
             const data = await response.json()
             console.log(data)
             setData(data)
         } catch (error) {
             console.log(error)
         }
     }
      data && data.length>0 && data.map((item)=><p>{item.about}</p>)
 */
    return (
        <main className="main">
            {Object.keys(data).length !== 0 && data.map((item) => <p key={item.id}>{item.company}</p>)}

        </main>
    )
}
export default Main