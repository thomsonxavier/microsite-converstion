import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Popup({ closemodal, open,hreflink }) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => closemodal(false)}
        >
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    You’re about to <span className=" text-blue-500 ">leave the Citi website</span>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     By clicking continue, you will visit a third-party website that is not owned or managed by us and this will open in a new window. We have no control of the content, privacy or security beyond this point.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-4 ">

            <a href={hreflink} target="_blank" className="bg-blue-500 mx-auto  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Continue
            </a>

                    <button
                      type="button"
                      className="mx-auto rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      onClick={() => closemodal(false)}
                    >
                     Stay on this page
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
