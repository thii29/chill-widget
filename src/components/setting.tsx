import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Setting = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-seafoam-50">
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Setting;
