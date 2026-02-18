import React from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import logo from "../../assets/logo/logo_black.png";
import { useModal } from "./ModalContext";
 
const FORM_URL =
"https://forms.zohopublic.in/gladowlwebsolutionspvtltd/form/PillaiIndex2026/formperma/UY1ZlmLotzsaSAuRm-KQ8THyUJhu78ruimnfSlNyT8k";
 
const FormModal = () => {
const { isOpen, closeModal } = useModal();
 
return (
<Modal show={isOpen} onClose={closeModal} size="lg">
<ModalHeader>
<div className="flex w-full flex-col items-center gap-2 md:flex-row md:justify-between">
<div className="flex flex-col items-center gap-2 md:flex-row">
<img src={logo} alt="Pillai University" className="h-12" />
<div className="text-center md:text-left">
<h6 className="text-sm font-semibold">Apply Now for Pillai University</h6>
<p className="text-xs text-red-700">
Enquire about the PULSE Entrance Exam and get 100% scholarship*.
</p>
</div>
</div>
<button
type="button"
onClick={closeModal}
className="mt-2 rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 transition hover:bg-gray-100 md:mt-0"
aria-label="Close"
>
✕
</button>
</div>
</ModalHeader>
<ModalBody className="p-0">
<iframe
title="Pillai Index 2026"
src={FORM_URL}
className="h-[520px] w-full border-0"
/>
</ModalBody>
</Modal>
);
};
 
export default FormModal;