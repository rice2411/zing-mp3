import React from 'react';
import useTheme from '../../../hooks/useTheme';

function Button({ text, active, className, leftIcon }: any) {
  const { styles }: any = useTheme();
  return (
    <>
      <button
        className={`${
          styles.body.textColor
        } leading-normal text-sm py-1 px-[28px] ${
          active ? 'bg-[#c662ef]' : ''
        }  font-normal  hover:text-white py-2 px-4 border border-[hsla(0,0%,100%,0.1)] hover:opacity-80 rounded-full
        ${className}`}
      >
        <div className="flex my-auto">
          {leftIcon && (
            <span className="flex flex-col text-2xl justify-center">
              {leftIcon}
            </span>
          )}
          {text && <span className="flex flex-col justify-center">{text}</span>}
        </div>
      </button>
    </>
  );
}

export default Button;
