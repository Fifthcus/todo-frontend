interface ModalProps {
    children: React.ReactNode;
    closeModalOnClick: (arg: boolean) => void;
}

const Modal = ({ children, closeModalOnClick }: ModalProps) => {
    return(<>
        <section onClick={() => closeModalOnClick(false)} className="w-screen absolute top-0 left-0 bg-gray-500 bg-opacity-80">
            <section className="h-screen flex justify-center items-center place-items-center">
                { children }
            </section>
        </section>
    </>);
}

export default Modal;