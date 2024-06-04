export interface ModalProps {
    visible: boolean;
    children?: string | null;
    close:() => void;
}