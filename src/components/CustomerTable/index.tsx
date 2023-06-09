import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { CustomerDataType } from "../../const/CustomerData";

interface ICustomerTableProps {
  customerData: CustomerDataType;
}

const CustomerTable = ({ customerData }: ICustomerTableProps) => {
  return (
    <TableContainer padding="0.8rem 2.7rem 2.1rem 1.6rem">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>CUSTOMER</Th>
            <Th>DATE</Th>
            <Th>TOTAL</Th>
            <Th>METHOD</Th>
            <Th>STATUS</Th>
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody fontSize="1.5rem">
          {customerData.map((data) => (
            <Tr key={data.id}>
              <Td>{data.id}</Td>
              <Td>{data.name}</Td>
              <Td>{data.date}</Td>
              <Td>{data.total}</Td>
              <Td>{data.method}</Td>
              <Td color="#FFC600" fontSize="1.5rem" fontWeight={600}>
                {data.status}
              </Td>
              <Td color="#0F60FF" fontSize="1.5rem">
                View Details
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
