import React, { useState } from 'react';

import Typography from '@mui/material/Typography';

import Button from 'components/common/Button';

import QuillEditor from './QuillEditor';

import styles from './CreatePage.scss';

const CreatePage = () => {
    return (
        <div className={styles.container}>
            <Typography>ReactQuill</Typography>
            <QuillEditor placeholder={'Start Posting Something'} />
            <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Sign In
            </Button>
        </div>
    );
};

export default CreatePage;
