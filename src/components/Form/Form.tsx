import { useState, useContext, ChangeEvent, FormEvent } from 'react';

import getInfosEmbed from '../../libs/getInfosEmbed';

import { SForm, SInput, SButton } from './style';

import { BookmarksContextType } from '../../@types/bookmarks.d';
import { BookmarksContext } from '../../context/bookmarksProvider';

function Form() {
    const [form, setForm] = useState({
        url: '',
    });
    const { bookmarks, setBookmarks } = useContext(BookmarksContext) as BookmarksContextType;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        getInfosEmbed(form.url)
            .then((bookmark) => {
                setForm({
                    url: ''
                });

                setBookmarks([...bookmarks, bookmark]);
            });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.target;

        setForm((prevState) => {
            const newState = { ...prevState, [name]: value };

            return newState;
        });
    };

    return (
        <SForm onSubmit={onSubmit}>
            <SInput
                onChange={handleChange}
                name="url"
                placeholder="Tapez votre url Viméo ou Flickr"
                type="text"
                value={form.url}
            />
            <SButton
                disabled={form.url === '' ? true : false}
                type="submit"
            >
                Ajouter en bookmark
            </SButton>
        </SForm>
    )
};

export default Form;