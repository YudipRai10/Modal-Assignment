import React, { useState } from "react";
import Modal from "./modal";

function ModalTest(props) {
  const [showModalPopup, setShowModalPopup] = useState(false);
  const handleTogglePopup = () => {
    setShowModalPopup(!showModalPopup);
  };
  const onClose = () => {
    setShowModalPopup(false);
  };
  return (
    <div className="p-10">
      <div
        onClick={handleTogglePopup}
        className="h-[300px] w-[300px] flex flex-col justify-center items-center border border-gray-400 rounded-lg cursor-pointer hover:shadow-2xl"
      >
        {props.data.image && (
          <div>
            <img
              className="h-[200px] w-[200px] rounded-full object-fill"
              src={props.data.image}
            />
          </div>
        )}
        <p className="mt-5">{props.data.name}</p>
      </div>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          header={props.data.header}
          body={props.data.body}
        />
      )}
    </div>
  );
}

export default ModalTest;
