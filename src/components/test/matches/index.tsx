import Match from '../matches/match'
import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'

const Matches = (props) => {
    const matchData = props.matchData.slice()

    return matchData.map((el) => (
        <Match key={el} data={el} userData={props.userData} />
    )) // [Match, Match,]
}

export default Matches
