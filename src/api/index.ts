import { CustomerData, CustomerDataType } from "../const/CustomerData";

export const getCustomerData = () => {
  return new Promise<CustomerDataType>((resolve) => {
    setTimeout(() => {
      resolve(CustomerData);
    }, 2000);
  });
};
