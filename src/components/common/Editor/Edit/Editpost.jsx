import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { modules } from 'configs/modules';
import { EDITOR_FIELD_ID_NAME } from 'constants/editor.constants';
import EditorToolbar from '../EditorToolbar';

function Editpost(props) {
    const history = useHistory();
    const [userInfo, setuserInfo] = useState({
        description: props.postList[0].description,
    });

    const ondescription = (value) => {
        setuserInfo({ ...userInfo,
            description: value,
        });
    };

    const [isError, setError] = useState(null);
    const PoemAddbooks = async (event) => {
        try {
            event.preventDefault();
            event.persist();
            if (userInfo.description.length < 50) {
                setError('Required, Add description minimum length 50 characters');
                return;
            }
            axios.post('http://localhost:8080/editArticle', {
                description: userInfo.description,
                ids: props.editPostID,
            })
                .then((res) => { // then print response status
                    if (res.data.success === true) {
                        history.push('/');
                    }
                });
        } catch (error) { throw error; }
    };
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <form onSubmit={PoemAddbooks} className="update__forms">
                        <h3 className="myaccount-content"> Edit   </h3>
                        <div className="form-row">
                            <div className="form-group col-md-12 editor">
                                <EditorToolbar toolbarId={EDITOR_FIELD_ID_NAME} />
                                <ReactQuill
                                    theme="snow"
                                    value={userInfo.description}
                                    onChange={ondescription}
                                    placeholder="Write something awesome..."
                                    modules={modules(EDITOR_FIELD_ID_NAME)}
                                />
                            </div>
                            {isError !== null && (
                                <div className="errors">
                                    {isError}
                                </div>
                            )}
                            <div className="form-group col-sm-12 text-right">
                                <button type="submit" className="btn btn__theme"> Submit  </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Editpost;
