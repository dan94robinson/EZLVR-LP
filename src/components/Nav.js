import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav =({setLibraryStatus, libraryStatus}) => {
    return (
        <nav>
            <h1>EZLVR - playing guitar won't get you laid - EP</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)} className={libraryStatus ? 'active-button' : ''}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;