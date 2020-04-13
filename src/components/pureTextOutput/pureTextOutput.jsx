import React from 'react';

function TextOutput(props) {
  const { value, show = false, delay = 0 } = props;
  const arr = value.split('');
  if (!show) {
    return <span></span>;
  }
  const spans = arr.map((char, index) => {
    const charStyle = {
      'animationDelay': `${(index + delay) / 10}s`,
    };
    return (
    <span key={index} style={charStyle}>{char}</span>
    )
  });

  return (
    <span className="comp-pure-text-output">
      { spans }
    </span>
  );
}

export default TextOutput;
