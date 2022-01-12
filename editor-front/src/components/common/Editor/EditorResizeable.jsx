import React, { useRef, useEffect } from 'react';

import { EditorResizeableWrapper } from './EditorResizeable.styles';

const EditorResizeable = ({ children, resizableRef, value }) => {
    const ref = useRef(null);
    console.log(',',value)
    useEffect(() => {
        const resizeableEle = ref.current;
        const styles = window.getComputedStyle(resizableRef.current);
        let width = parseInt(styles.width, 10);
        let x = 0;
        resizeableEle.style.top = '380px';
        // Right resize
        const onMouseMoveRightResize = (event) => {
            const dx = event.clientX - x;
            x = event.clientX;
            width += dx;
            console.log(width);
            resizeableEle.style.width = `${width}px`;
        };

        const onMouseUpRightResize = () => {
            document.removeEventListener('mousemove', onMouseMoveRightResize);
        };

        const onMouseDownRightResize = (event) => {
            x = event.clientX;
            resizeableEle.style.left = styles.left;
            resizeableEle.style.right = null;
            document.addEventListener('mousemove', onMouseMoveRightResize);
            document.addEventListener('mouseup', onMouseUpRightResize);
        };

        // Left resize
        const onMouseMoveLeftResize = (event) => {
            const dx = event.clientX - x;
            x = event.clientX;
            width -= dx;
            resizeableEle.style.width = `${width}px`;
        };

        const onMouseUpLeftResize = () => {
            document.removeEventListener('mousemove', onMouseMoveLeftResize);
        };

        const onMouseDownLeftResize = (event) => {
            x = event.clientX;
            resizeableEle.style.right = styles.right;
            resizeableEle.style.left = null;
            document.addEventListener('mousemove', onMouseMoveLeftResize);
            document.addEventListener('mouseup', onMouseUpLeftResize);
        };

        // Add mouse down event listener

        const resizerRight = resizableRef.current;
        resizerRight.addEventListener('mousedown', onMouseDownRightResize);
        const resizerLeft = resizableRef.current;
        resizerLeft.addEventListener('mousedown', onMouseDownLeftResize);

        return () => {
            resizerRight.removeEventListener('mousedown', onMouseDownRightResize);
            resizerLeft.removeEventListener('mousedown', onMouseDownLeftResize);
        };
    }, []);

    return (
        <EditorResizeableWrapper ref={ref}>
            {children}
        </EditorResizeableWrapper>
    );
};

export default EditorResizeable;
