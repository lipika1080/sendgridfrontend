import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { bookAppointment } from "../api";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    carMake: "",
    carModel: "",
    carYear: "",
    plateNumber: "",
    serviceDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const payload = {
      date: form.serviceDate,
      carDetails: {
        make: form.carMake,
        model: form.carModel,
        year: parseInt(form.carYear), // Convert to number
        plateNumber: form.plateNumber,
      },
      contactDetails: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      paymentStatus: "Pending",
    };

    try {
      await bookAppointment(payload);
      alert("Appointment Booked");
    } catch (error: any) {
      console.error("Booking failed:", error);
      alert("Error booking appointment");
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <VStack spacing={4}>
        <Input name="name" placeholder="Name" onChange={handleChange} />
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input name="phone" placeholder="Phone" onChange={handleChange} />
        <Input name="carMake" placeholder="Car Make" onChange={handleChange} />
        <Input name="carModel" placeholder="Car Model" onChange={handleChange} />
        <Input name="carYear" type="number" placeholder="Car Year" onChange={handleChange} />
        <Input name="plateNumber" placeholder="Plate Number" onChange={handleChange} />
        <Input name="serviceDate" type="date" onChange={handleChange} />
        <Button onClick={handleSubmit} colorScheme="blue">
          Book Appointment
        </Button>
      </VStack>
    </Box>
  );
}
