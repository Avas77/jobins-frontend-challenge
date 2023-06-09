import React from "react";
import Board from "../Board";
import CustomerTable from "../CustomerTable";
import { getCustomerData } from "../../api";
import { CustomerDataType } from "../../const/CustomerData";
import TableFooter from "../TableFooter";

const CustomerBoard = () => {
  const [customerData, setCustomerData] = React.useState<CustomerDataType>([]);

  React.useEffect(() => {
    getCustomerData()
      .then((response) => setCustomerData(response))
      .catch(() => {});
  }, []);

  return (
    <Board mt="2.2rem">
      <CustomerTable customerData={customerData} />
      <TableFooter />
    </Board>
  );
};

export default CustomerBoard;
