import isFunction from "lodash.isfunction";

const getInitialValuesFormik = ({
  data,
  initialValues,
  customizeValue = {},
} = {}) => {
  const initialValuesProps = Object.keys(initialValues);
  if (!data) return initialValues;
  const finalValue = initialValuesProps.reduce((obj, prop) => {
    const targetValue =
      customizeValue.hasOwnProperty(prop) && isFunction(customizeValue[prop])
        ? customizeValue[prop](data[prop])
        : data[prop];
    return Object.assign(obj, { [prop]: targetValue ?? "" });
  }, {});
  return finalValue;
};

export default getInitialValuesFormik;
