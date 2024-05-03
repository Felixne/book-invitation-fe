import { BOOKING_FORM_API_PATH } from "@constants/apiConstant";
import { BookingFormFormDataType } from "@interfaces/Common/bookingFormType";
import { axiosInstance } from "@utils/Axios";

const createBooking = async (data: BookingFormFormDataType) => {
  await axiosInstance.post(BOOKING_FORM_API_PATH.BOOKING_FORM, data);
};
export { createBooking };
