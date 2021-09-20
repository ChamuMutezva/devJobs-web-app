import { useState, createContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

export const JobsContext = createContext()


export const JobsProvider = props => {
    const history = useHistory()

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
                console.log(response)
                return response.data;
            })

            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });

    }

    const findJob = (id) => {
        setData(data.find(job => job.id === id))
    }

    const routeChange = (evt, id) => {
        evt.preventDefault()
        history.push(`job/${id}`)
    }

    return (
        <JobsContext.Provider value={[data, setData, routeChange, findJob ]}>
            {props.children}
        </JobsContext.Provider>
    )
}