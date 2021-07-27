import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorComponent,
    WordExport,
    SfdtExport,
    Selection,
    Editor,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, WordExport);
class JsWord extends React.Component {
    save() {
        let proxy = this;
        proxy.documenteditor.save('sample', 'Docx');
    }
    render() {
        return (
            <div>
                <button onClick={this.save.bind(this)}>Save</button>
                <DocumentEditorComponent
                    id="container"
                    ref={(scope) => {
                        this.documenteditor = scope;
                    }}
                    isReadOnly={false}
                    enableSelection={true}
                    enableEditor={true}
                    enableSfdtExport={true}
                    enableWordExport={true}
                >
                </DocumentEditorComponent>
            </div>
        );
    }
}

export default JsWord;
