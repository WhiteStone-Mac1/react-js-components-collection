import React from 'react'
import Lottie from 'react-lottie';
import loading from './loading.json';

const Loading = ({ height = 400, width = 400 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default Loading;
