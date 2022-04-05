import React, { useState } from 'react';
import getInfosEmbed from '../../libs/getInfosEmbed';
import { SForm, SInput, SButton } from './style';

function Form() {
    const [form, setForm] = useState({
        url: '',
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const onSubmit = (
        e: {
            preventDefault: () => void;
        }) => {
        e.preventDefault();

        getInfosEmbed().then((res) => {
            console.log(res)
        });
    };

    const handleChange = (
        e: {
            preventDefault: () => void;
            target: { name: string; value: string; };
    }) => {
        e.preventDefault();
        const { name, value } = e.target;

        setIsButtonDisabled(false);
        setForm((prevState) => {
            const newState = { ...prevState, [name]: value };

            return newState;
        });
    };

    return (
        <SForm>
            <SInput
                onChange={(e) => handleChange(e)}
                name="url"
                placeholder="Tapez votre url Viméo ou Flickr"
                type="text"
                value={form.url}
            />
            <SButton
                disabled={isButtonDisabled}
                onClick={(e) => onSubmit(e)}
                type="button"
            >
                Ajouter en bookmark
            </SButton>
        </SForm>
    )
};

export default Form;
