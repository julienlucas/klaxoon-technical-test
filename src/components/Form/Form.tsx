import { useState, useContext, ChangeEvent, FormEvent } from 'react';

import getInfosEmbed from '../../libs/getInfosEmbed';

import { SForm, SInput, SButton } from './style';

import { BookmarksContextType } from '../../@types/bookmarks.type';
import { BookmarksContext } from '../../context/bookmarksProvider';

function Form() {
    const [form, setForm] = useState({
        url: '',
    });
    const { bookmarks, setBookmarks } = useContext(BookmarksContext) as BookmarksContextType;

    const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const newBookmark = await getInfosEmbed(form.url);
        setBookmarks([...bookmarks, newBookmark]);
        setForm({
            url: ''
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
                data-testid={'input'}
                onChange={handleChange}
                name="url"
                placeholder="Ajoutez votre url Viméo ou Flickr"
                type="text"
                value={form.url}
            />
            <SButton
                data-testid={'submit'}
                disabled={!form.url}
                type="submit"
            >
                Ajouter en bookmark
            </SButton>
        </SForm>
    )
};

export default Form;