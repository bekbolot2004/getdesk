import { Fragment, useState } from "react";
import global from "../../atoms/assets/global.svg";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "./Modal";

const ChooseMoneyAndLanguage = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


  return (
    <>
      <button
        onClick={openModal}
        className="h-[44px] w-[44px] flex justify-center items-center rounded-full bg-[#717171] hover:bg-black"
      >
        <img src={global} alt="language" />
      </button>
      <button onClick={openModal} className="h-[44px] w-[44px] flex items-center text-[#717171] hover:text-[#ED4040] mr-3">
        <p className="text-xl  font-light">RUB</p>
        <div className="pl-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[16px] h-[16px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center max-sm:p-2 p-4 text-center backdrop-blur-sm">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[1000px] transform overflow-hidden rounded-xl bg-white max-sm:p-3 p-6 text-left align-middle shadow-xl transition-all">
                  <Modal closeModal={closeModal}  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ChooseMoneyAndLanguage;
