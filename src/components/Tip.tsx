import React, { useState, useEffect } from 'react'
import Tips from '../assets/tips'
const randToLoad = Math.floor(Math.random() * 100) % Object.keys(Tips).length

const RenderTips = () => {
    return (
        <div>
            <p
                style={{
                    color: 'white',
                }}
            >
                <b
                    style={{
                        color: 'rgb(197,164,92)',
                    }}
                >
                    Tip!
                </b>{' '}
                {Tips[randToLoad]}
            </p>
        </div>
    )
}

export default RenderTips
