import React, { useEffect, useState } from "react";
import Loader from './Loader'
import { EARNINGSTATSURI } from './Constants'

export default function EarningStats() {
    const [appState, setAppState] = useState({
        loading: false,
        earningStats: { points: null, earning: null },
    });


    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = EARNINGSTATSURI;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((stats) => {
                setAppState({ loading: false, earningStats: stats });
            });
    }, []);

    if (appState.loading) {
        return <Loader />
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Gross Earning</td><td>{appState.earningStats.points} points</td>
                    </tr>
                    <tr>
                        <td>Amount in local currency</td><td>{appState.earningStats.points}</td>
                    </tr>
                    <tr>
                        <td>Current Balance</td><td>{appState.earningStats.earning}</td>
                    </tr>
                </tbody>
            </table>
            <form>
                <select name='transferStatsAction'>
                    <option value="Statement">Statement</option>
                    <option value="Transfer">Transfer</option>
                </select>
                <input type="submit" value="Go"></input>
            </form>
            <hr></hr>
        </div>

    );
}