import React, { useEffect, useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import nivo from 'nivo'

const countGender = (arr) => {
    let countMale = 0
    let countFemale = 0
    arr.forEach(item => item.gender === "Male" ? countMale++ : item.gender === "Female" ? countFemale++ : countMale += 0)
    
    return {male: countMale, female: countFemale}
}

const Graph = (props) => {
    const [genderNum, setGenderNum] = useState()
    useEffect(() => {
        setGenderNum(countGender(props.data))
    }, [])
    console.log('gendernum', genderNum)
    console.log('props', props.data)
    return (
        <div className="App">
            <ResponsiveBar 
            data={[...props.data, genderNum]}
            keys={["genderNum"]}
            indexby="gender"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'gender',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
        </div>
    )
}

export default Graph
