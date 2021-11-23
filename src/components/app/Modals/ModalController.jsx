import React, { useContext, useCallback, useMemo } from 'react';

import { ModalContext } from './ModalContext';
import modalMap from './modalMap';

const ModalController = () => {
    const { modalName, data, setModal } = useContext(ModalContext);

    const handleClose = useCallback(() => {
        setModal(null);
    }, [setModal]);

    const Modal = useMemo(() => modalMap[modalName], [modalName]);

    if (!Modal) return null;

    return <Modal {...data} onClose={handleClose} onOpen={setModal} />;
};

export default ModalController;
