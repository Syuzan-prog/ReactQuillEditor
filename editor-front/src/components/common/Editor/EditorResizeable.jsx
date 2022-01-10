import React, { useRef, useEffect } from 'react';

const EditorResizeable = () => {
    const ref = useRef(null);
    const refLeft = useRef(null);
    const refRight = useRef(null);

    useEffect(() => {
        const resizeableEle = ref.current;
        const styles = window.getComputedStyle(resizeableEle);
        let width = parseInt(styles.width, 10);
        let x = 0;

        resizeableEle.style.top = '50px';
        resizeableEle.style.left = '50px';

        // Right resize
        const onMouseMoveRightResize = (event) => {
            const dx = event.clientX - x;
            x = event.clientX;
            width += dx;
            resizeableEle.style.width = `${width}px`;
        };

        const onMouseUpRightResize = (event) => {
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

        const onMouseUpLeftResize = (event) => {
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
        const resizerRight = refRight.current;
        resizerRight.addEventListener('mousedown', onMouseDownRightResize);
        const resizerLeft = refLeft.current;
        resizerLeft.addEventListener('mousedown', onMouseDownLeftResize);

        return () => {
            resizerRight.removeEventListener('mousedown', onMouseDownRightResize);
            resizerLeft.removeEventListener('mousedown', onMouseDownLeftResize);
        };
    }, []);

    return (
        <div className="container">
            <div ref={ref} className="resizeable">
                <div ref={refLeft} className="resizer resizer-l" />
                <div ref={refRight} className="resizer resizer-r" />
            </div>
        </div>
    );
};

export default EditorResizeable;
