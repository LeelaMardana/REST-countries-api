import { SET_THEME } from './theme-action';

export const themeReducer = (state = 'dark', { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
};
