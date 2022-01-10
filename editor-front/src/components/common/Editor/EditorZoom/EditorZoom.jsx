import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const minScale = 1;
const maxScale = 1.3;
const defaultPosition = { x: 0, y: 0, scale: minScale, duration: 100 };

const EditorZoom = ({ editorRef, children }) => {
    const [position, setPosition] = useState(defaultPosition);

    const quickPinchZoomRef = useRef();

    const onUpdate = useCallback(({ x, y, scale: pinchScale }) => {
        if (editorRef.current) {
            const value = make3dTransformValue({ x, y, scale: pinchScale });
            setPosition({ ...position, x, y, scale: pinchScale });
            editorRef.current.style.setProperty('transform', value);
        }
    }, [position, editorRef]);

    const onZoomIn = useCallback(() => {
        const { scale } = position;
        if (scale < maxScale) {
            const newPosition = { ...position, scale: scale + 0.1 };
            quickPinchZoomRef.current?.scaleTo(newPosition);
        }
    }, [position]);

    const onZoomOut = useCallback(() => {
        const { scale } = position;
        if (scale > minScale) {
            const newPosition = { ...position, scale: scale - 0.1 };
            quickPinchZoomRef.current?.scaleTo(newPosition);
        }
    }, [position]);

    return (
        <>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={onZoomOut}>
                <RemoveIcon />
            </IconButton>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={onZoomIn}>
                <AddIcon />
            </IconButton>
            <QuickPinchZoom
                enabled={position.scale > minScale}
                inertia={false}
                containerProps={{
                    style: {
                        touchAction: 'auto',
                    },
                }}
                ref={quickPinchZoomRef}
                wheelScaleFactor={100}
                shouldInterceptWheel={() => false}
                maxZoom={maxScale}
                minZoom={minScale}
                zoomOutFactor={1}
                onUpdate={onUpdate}
            >
                {children}
            </QuickPinchZoom>
        </>
    );
};

EditorZoom.propTypes = {
    children: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    editorRef: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
export default EditorZoom;
