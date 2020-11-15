import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { STATEMENTBASEURI } from '../Constants'
import Loader from './Loader'
import '../styles/Statement.css'
export default function Statement() {

    const { register, handleSubmit } = useForm();
    const [appState, setAppState] = useState({
        loading: false,
        selectedOption: null,
        statements: null
    });
    const onSubmit = (data) => {
        console.log(data)
        var valid = false
        var query = ""
        if(appState.selectedOption === 'Last'){
            valid = true
            query="number="+data.lastNumberOf+"&period="+data.period
            console.log("query::"+query)
        }
        else if(appState.selectedOption === 'Year'){
            valid = true
            query="number="+data.numberOfYear+"&month="+data.month
            console.log("query::"+query)
        }
        else if(appState.selectedOption === 'Absolute'){

        }
        
        if(valid){
            setAppState({loading: true, statements: null, selectedOption: appState.selectedOption});
            //get the data for the above query
            fetch(STATEMENTBASEURI)
            .then((response) => response.json())
            .then((stats) => {
                setAppState({ loading: false, statements: [stats.list], selectedOption: appState.selectedOption});
                console.log(stats);
                });
        }
    };

    const handleOptionChange = (event) => {
        setAppState({
            loading: false,
            selectedOption: event.target.value,
            statements: null
        })
        console.log(event.target.value)
    };

    var statementListContainer = <div></div>
    if(appState.loading){
        statementListContainer = <Loader/>
    }
    else{
        console.log(appState.statements)
        if(appState.statements!==null){
           var data = appState.statements.map((item) => <tr><td>{item.date}</td><td>{item.id}</td><td>{item.pe}</td><td>{item.remark}</td></tr>
            );
            console.log(data)
            statementListContainer = (<table>
                <tr>
                        <th>
                            Date
                        </th>
                        <th>
                            Service Id
                        </th>
                        <th>
                            Point Earned
                        </th>
                        <th>
                            Remark
                        </th>
                </tr>
                <tbody>
                    {
                       data 
                    }
                </tbody>
            </table>)
        }
    }
    return (
        <div>
            <h3>Statement</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr id="entry">
                            <td>
                                <input type="radio" name="searchMode" value="Last" id="Last" onChange={handleOptionChange} />
                            </td>
                            <td>
                                Last
                            </td>
                            <td>
                                <input type="number" placeholder="1..2..3" name="lastNumberOf" disabled={appState.selectedOption !== 'Last'} ref={register()}/>
                            </td>
                            <td>
                                <select name='period' disabled={appState.selectedOption !== 'Last'} ref={register()}>
                                    <option value="Week">Week</option>
                                    <option value="Month">Month</option>
                                    <option value="Year">Year</option>
                                </select>
                            </td>
                        </tr>
                        <tr id="entry">
                            <td>
                                <input type="radio" name="searchMode" value="Year" id="Year" onChange={handleOptionChange}></input>
                            </td>
                            <td>
                                Year
                            </td>
                            <td>
                                <input type="number" placeholder="2019" name="numberOfYear" disabled={appState.selectedOption !== 'Year'} ref={register()}/>
                            </td>
                            <td>
                                Month
                                <select name='month' disabled={appState.selectedOption !== 'Year'} ref={register()}>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </td>
                        </tr>
                        <tr id="entry">
                            <td>
                                <input type="radio" name="searchMode" value="Absolute" id="Absolute" onChange={handleOptionChange}></input>
                            </td>
                            <td>
                                From
                            </td>
                            <td>
                                {/* add date picker here */}
                            </td>
                            <td>
                                To
                            </td>
                            <td>
                                {/* add date picker here*/}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="PadLeft5"><input type="submit" value="Search" /></div>
            </form>
            {statementListContainer}
        </div>

    );
}