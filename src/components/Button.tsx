import React from 'react';

type ButtonPropsType = {
   callBack: () => void
   title: string
}

export const Button = (props: ButtonPropsType) => {
   const onClickHandler = () => {
      props.callBack()
   }

   return (
      <button onClick={onClickHandler}>{props.title}</button>
   );
};

