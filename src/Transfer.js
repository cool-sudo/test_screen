import React from "react";
import { useForm } from "react-hook-form"
import { INVALID_TRANSFER_AMOUNT_MESSAGE } from './Constants'
export default function Transfer() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h3>Transfer</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                { errors.amount && <p>{errors.amount.message}</p>}
                <input type="number" placeholder="Amount" name="amount" ref={register({ required: INVALID_TRANSFER_AMOUNT_MESSAGE})} />
                <input type="submit" value="Proceed"/>
            </form>
            <hr></hr>
        </div>

    );
}
