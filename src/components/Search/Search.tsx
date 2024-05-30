import React from "react";
import styles from './Search.module.scss';
import {Button} from "../Button";
import SearchIcon from '../../assets/icon-search.svg?react'


interface SearchProps {
    onSubmit: (text: string) => void
    error: boolean
}

type FormFields = {
    username: HTMLInputElement
}

export const Search = ({onSubmit, error}: SearchProps) => {

        const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields> ) => {
            event.preventDefault();
            const text = event.currentTarget.username.value || '';

            if(text){
                onSubmit(text);
                event.currentTarget.reset();
            }
        }

        return (<form onSubmit={handleSubmit} autoComplete='off'>
            <div className={styles.search}>
                <label htmlFor='' className={styles.label}>
                    <SearchIcon/>
                </label>
                <input
                    type='text'
                    id='search'
                    name='username'
                    className={styles.textField}
                    placeholder='Search GitHub user...'
                />
                {error && <div className={styles.error}>User not found</div>}
                <Button>Search</Button>
            </div>
        </form>)
    }
;
