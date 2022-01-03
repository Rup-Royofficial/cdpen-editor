import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled, Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

function Editor(props) {

    const { displayName, language, value, onChange } = props;

    const [isOpen, setIsOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }
    return (
        <div className={`editor-container ${isOpen ? '' : 'collpased'}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type="button"
                    className="expand-compress-btn"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: "true",
                    theme: "material",
                    lint: "true",
                    mode: language,
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor
