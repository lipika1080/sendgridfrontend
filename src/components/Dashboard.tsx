import { Box, Table, Thead, Tr, Th, Td, Tbody } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchAppointments } from "../api";

export default function Dashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    fetchAppointments().then((res: any) => setAppointments(res.data));
  }, []);

  return (
    <Box maxW="6xl" mx="auto" mt={10}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Car</Th>
            <Th>Plate</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {appointments.map((a, i) => (
            <Tr key={i}>
              <Td>{a.contactDetails?.name}</Td>
              <Td>{a.contactDetails?.email}</Td>
              <Td>{a.carDetails?.model}</Td>
              <Td>{a.carDetails?.plateNumber}</Td>
              <Td>{a.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
