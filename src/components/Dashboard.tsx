import { Box, Table, Th, Tr, Td, Thead, Tbody } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchAppointments } from "../api";

export default function Dashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    fetchAppointments().then(res => setAppointments(res.data));
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
              <Td>{a.name}</Td>
              <Td>{a.email}</Td>
              <Td>{a.carModel}</Td>
              <Td>{a.plateNumber}</Td>
              <Td>{a.serviceDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
