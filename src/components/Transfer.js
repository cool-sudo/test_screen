import React from "react";
import { useForm } from "react-hook-form"
import { INVALID_TRANSFER_AMOUNT_MESSAGE } from '../Constants'
import '../styles/Transfer.css'
export default function Transfer() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h3>Transfer</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="Error">{errors.amount && <p>{errors.amount.message}</p>}</div>
                <table className="Main">
                    <tbody>
                        <tr id="entry">
                            <td>
                                Amount
                            </td>
                            <td>
                                <input type="number" placeholder="Amount" name="amount" ref={register({ required: INVALID_TRANSFER_AMOUNT_MESSAGE })} />
                            </td>
                            <td>
                                <input type="submit" value="Proceed" />
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
                

            </form>
        </div>

    );
}
