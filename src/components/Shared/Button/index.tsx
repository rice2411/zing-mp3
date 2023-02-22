import React from 'react';
import useTheme from '../../../hooks/useTheme';

function Button({ text, active }: any) {
  const { styles }: any = useTheme();
  return (
    <>
      <button
        className={`${
          styles.body.textColor
        } leading-normal text-sm py-1 px-[28px] ${
          active ? 'bg-purple-800' : ''
        }  font-normal  hover:text-white py-2 px-4 border border-[hsla(0,0%,100%,0.1)] hover:opacity-80 rounded-full`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
