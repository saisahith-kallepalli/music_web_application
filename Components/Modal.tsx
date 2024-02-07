import * as Dialog from "@radix-ui/react-dialog";
import { HiXMark } from "react-icons/hi2";

interface ModelProps {
  onHandleChange: () => void;
  isOpen: boolean;
  description?: string;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModelProps> = (props) => {
  const { onHandleChange, isOpen, description, title, children } = props;
  return (
    <Dialog.Root open={isOpen} onOpenChange={onHandleChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0 overflow-auto" />
        <Dialog.Content className=" fixed  border  border-neutral-700 top-[50%] left-[50%]  h-auto md:min-h-[70%] md:max-h-[100%] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none">
          <Dialog.Title className="text-xl text-center font-bold mb-4">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-xl text-center font-bold mb-4">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild></Dialog.Close>
          <button
            onClick={onHandleChange}
            className="text-neutral-400 hover:text-neutral-200 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none">
            <HiXMark />
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
