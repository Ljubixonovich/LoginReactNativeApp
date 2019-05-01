export const UI_START_LOADING = 'UI_START_LOADING';
export const UI_STOP_LOADING = 'UI_STOP_LOADING';

export const uiStartLoading = () => ({ type: UI_START_LOADING });
export const uiStopLoading = () => ({ type: UI_STOP_LOADING });



export const TRY_AUTH = 'TRY_AUTH';

export const tryAuth = (userName, password) => ({ 
   type: TRY_AUTH, 
   payload: {
      userName: userName, 
      password: password
   } 
});

export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN';
export const AUTH_REMOVE_TOKEN = 'AUTH_REMOVE_TOKEN';
