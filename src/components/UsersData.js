import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Graph from './Graph'

const USERS_DATA = gql`
    query Users($gender: String, $age: String, $education: String){
     tradersUsers(gender: $gender, age: $age, education: $education)
        {
            id
            gender
            age
            education
            crossing_freq
            country_of_residence
            produce
            language
        }   
    }
`

const UsersData = () => {
    const [variables, setVariables] = useState({})
    const { loading, error, data } = useQuery(USERS_DATA, {
        variables: variables
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log('variables', variables)
    return (
        <div>
            <Graph data={data.tradersUsers.slice(0,30)} />
            {data.tradersUsers.slice(0,10).forEach(item => {
                console.log(item)
            })}
            <button onClick={e => variables.age === false ? setVariables({age: "20-30"}) : setVariables({})}>Toggle Age 20-30</button>
        </div>
    )
}

export default UsersData
