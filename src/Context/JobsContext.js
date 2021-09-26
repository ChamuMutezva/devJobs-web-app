import { useState, createContext, useEffect } from 'react'
//import { useHistory } from 'react-router'
import axios from 'axios'

export const JobsContext = createContext()


export const JobsProvider = props => {
   // const history = useHistory()

    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    //get data from json api
    const getData = async () => {

        await axios.get('data.json'

            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )

            .then(function (response) {               
                return response.data;
            })

            .then(function (myJson) {               
                setData(myJson)
            });

    }

    return (
        <JobsContext.Provider value={{data }}>
            {props.children}
        </JobsContext.Provider>
    )
}