import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { INVALID_TRANSFER_AMOUNT_MESSAGE } from './Constants'
export default function Statement() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);


    const [appState, setAppState] = useState({
        loading: false,
        selectedOption: null
    });

    const handleOptionChange = (event) => {
        setAppState({
            loading: false,
            selectedOption: event.target.value
        })
        console.log(event.target.value)
    };

    return (
        <div>
            <h3>Statement</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type="radio" name="searchMode" value="Last" id="Last" onChange={handleOptionChange} />
                            </td>
                            <td>
                                Last
                            </td>
                            <td>
                                <input type="number" placeholder="1..2..3" name="lastNumberOf" disabled={appState.selectedOption !== 'Last'} />
                            </td>
                            <td>
                                <select name='period' disabled={appState.selectedOption !== 'Last'}>
                                    <option value="Week">Week</option>
                                    <option value="Month">Month</option>
                                    <option value="Year">Year</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="radio" name="searchMode" value="Year" id="Year" onChange={handleOptionChange}></input>
                            </td>
                            <td>
                                Year
                            </td>
                            <td>
                                <input type="number" placeholder="2019" name="lastNumberOf" disabled={appState.selectedOption !== 'Year'} />
                            </td>
                            <td>
                                <select name='period' disabled={appState.selectedOption !== 'Year'}>
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
                        <tr>
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
            </form>
        </div>

    );
}