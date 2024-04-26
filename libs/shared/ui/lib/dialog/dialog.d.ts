import { ReactNode } from 'react';

export interface DialogProps {
    open: boolean;
    onOpenChange: (event: any, data: any) => void;
    title: string;
    action: () => void;
    actionText: string;
    children: ReactNode;
    showActionButtons: boolean;
}
export declare function ModalDialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;
export default ModalDialog;
