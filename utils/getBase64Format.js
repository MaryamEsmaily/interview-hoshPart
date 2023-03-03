const getBase64Format = (file, { name, onChange }) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    if (onChange)
      onChange({
        target: {
          value: reader.result,
          name,
        },
      });
  };
};

export default getBase64Format;
