import * as actionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initState = {
  success: '',
  error: '',
  info: '',
  warning: '',
};

function notifications(state = initState, action) {
  switch (action.type) {

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        success: 'ورودت رو به کهکشان مهرگان خوش‌آمد میگم!',
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        success: 'دوباره سلام!',
      };

    case actionTypes.SEND_ANSWER_SUCCESS:
      return {
        ...state,
        success: 'جواب با موفقیت ثبت شد!',
      };

    case actionTypes.CHANGE_PASSWORD_FAILURE:
    case actionTypes.SEND_ANSWER_FAILURE:
    case actionTypes.PAYMENT_IGNORE_FAILURE:
    case actionTypes.PAYMENT_FAILURE:
    case actionTypes.UPDATE_USER_INFO_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.CREATE_ACCOUNT_FAILURE:
      if (action.error) {
        return {
          ...state,
          error: action.error,
        }
      } else {
        return {
          ...state,
          error: 'ای بابا! یه مشکلی وجود داره. یه چند لحظه دیگه دوباره امتحان کن.',
        }
      }

    case actionTypes.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        success: 'ایول! اطلاعاتت با موفقیت به روز شد.',
      };

    case actionTypes.LOGOUT:
      setTimeout(
        () => {
          toast.info('خدا به همراهت!',
            {
              position: 'bottom-right',
            }
          )
        }, 0)
      return { ...state };

    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        success: 'خوبه! رمزت با موفقیت به اون چیزی که وارد کردی، تغییر کرد.',
      };

    case actionTypes.PAYMENT_SUCCESS:
      return {
        ...state,
        info: 'در حال رفتن به درگاه پرداخت...',
      };

    case actionTypes.INIT_TOAST:
      return initState;

    default:
      return state;
  }
}

export default notifications;