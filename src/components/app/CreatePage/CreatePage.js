import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import QuillEditor from '../QuillEditor';
import Button from 'components/common/Button';

import styles from './CreatePage.scss';
import { saveDocument } from 'state/modules/quillEditor.module';

const CreatePage = () => {
    const dispatch = useDispatch();
    const [content, setContent] = useState('');

    const onEditorChange = (value) => {
        setContent(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('content>',content)
        dispatch(saveDocument(content));
    };

    return (
        <div className={styles.container}>
            <h5>ReactQuill</h5>
            <QuillEditor placeholder={'Start Posting Something'} onEditorChange={onEditorChange} />

            <form onSubmit={onSubmit}>
                <div className={styles.button}>
                    <Button label="Submit" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default CreatePage;
