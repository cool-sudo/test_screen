import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import "../styles/EarningStats.css";
import { EARNINGSTATSURI } from "../Constants";

export default function EarningStats() {
  const [appState, setAppState] = useState({
    loading: false,
    earningStats: { points: null, earning: null }
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = EARNINGSTATSURI;
    fetch(apiUrl)
      .then(response => response.json())
      .then(stats => {
        setAppState({ loading: false, earningStats: stats });
      });
  }, []);

  if (appState.loading) {
    return <Loader />;
  }
  return (
    <div>
      <form>
        <table className="Main">
          <tbody>
            <tr id="entry">
              <td>Gross Earning</td>
              <td>{appState.earningStats.points} points</td>
            </tr>
            <tr id="entry">
              <td>Amount in local currency</td>
              <td>{appState.earningStats.points}</td>
            </tr>
            <tr id="entry">
              <td>Current Balance</td>
              <td>{appState.earningStats.earning}</td>
            </tr>
            <tr id="entry">
              <td>
                <select name="transferStatsAction" className="fullWidth height30">
                  <option value="Statement">Statement</option>
                  <option value="Transfer">Transfer</option>
                </select>
              </td>
              <td>
                <input type="submit" value="Go" className="height30"></input>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

    </div>
  );
}
