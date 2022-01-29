const changeStyle = (currentStyle) => {
  return ({
    type: 'CHANGE_STYLE',
    currentStyle: currentStyle
  });
};

export default changeStyle;