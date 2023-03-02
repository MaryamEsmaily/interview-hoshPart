export const initialStateAppLayout = {
  open: false,
};

/**
 * * مربوط به باز و بسته شدن منو reducer
 */
const appLayoutReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { open: !state.open };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default appLayoutReducer;
