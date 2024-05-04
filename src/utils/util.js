import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export const toastErrorNotification = (msg) => {
  const toast = useToast();
  return toast.error(msg, {
    position: "top-right",
  });
};
export const toastSuccessNotification = (msg) => {
  const toast = useToast();
  return toast.success(msg, {
    position: "top-right",
  });
};
