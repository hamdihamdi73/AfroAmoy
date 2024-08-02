// WithdrawNow.tsx
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  FormControl,
  FormLabel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  useToast,
  ModalFooter,
} from "@chakra-ui/react";
import {
  useAddress,
} from "@thirdweb-dev/react";
import { useState } from "react";
import styles from "../styles/CashInOutForm.module.css";
import { IconButton } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

import axios from 'axios';

export default function DepositFormPage() {
  const [modalContent, setModalContent] = useState<null | JSX.Element>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toast = useToast();
  const address = useAddress();
  const [formData, setFormData] = useState({
    amount: "",
    depositCurrency: "",
    yourEmail: "",
    depositDestination: "",
    address: address
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    name: string
  ): void => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));

    if (name === "withdrawalDestination" && !event.target.value) {
      // Handle the error here
      console.error("Please choose or complete the necessary fields.");
      // You might want to set an error state or show an error message to the user.
    }
  };

  const handleEmailButtonClick = () => {
    // Add logic to set the modal content based on the selected option
    setModalContent(getModalContent());
    // Open the modal
    setIsModalOpen(true);

    // have enough time to complete before sending the email
    setTimeout(async () => {

        const withdrawalApiEndpoint = '/api/depositEmail';

        try {
          const response = await axios.post(withdrawalApiEndpoint, formData);

          if (response.data.success) {
            console.log('Deposit email sent successfully');
          } else {
            console.error('Deposit email sending failed');
          }
        } catch (error) {
          console.error('Error sending Deposit email:', error);
        }
      
      // Send email
    }, 500);
  };

  const getModalContent = () => {
    switch (formData.depositDestination) {
      case "GCash":
        return (
          <>
            <center>
              <ModalHeader>GCash</ModalHeader>
            </center>
            <ModalBody>
              <Text>
                <b>GCash Holder Name:</b> AL**N BR***O C.
              </Text>{" "}
              <br></br>
              <Text>
                <b>GCash Holder Number:</b> 09760874368
              </Text>{" "}
              <br></br> <br></br> <br></br>
              <Text>
                <center>
                  <i>
                    Please transfer the exact amount you specified in the form
                    to this account for the processing of your deposit.
                  </i>
                </center>
              </Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
      case "Paynow":
        return (
          <>
            <center>
              <ModalHeader>Paynow</ModalHeader>
            </center>
            <ModalBody>
              <Text>
                <b>Paynow Number:</b> 96443927
              </Text>{" "}
              <br></br> <br></br> <br></br>
              <Text>
                <center>
                  <i>
                    Please transfer the exact amount you specified in the form
                    to this account for the processing of your deposit.
                  </i>
                </center>
              </Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
      case "BankTransfer":
        return (
          <>
            <center>
              <ModalHeader>Bank Transfer</ModalHeader>
            </center>
            <ModalBody>
              <Text>
                <b>Bank:</b> Security Bank
              </Text>{" "}
              <br></br>
              <Text>
                <b>Bank Holders Name:</b> ALLAN BRANDO B. CATAYOC
              </Text>{" "}
              <br></br>
              <Text>
                <b>Bank Holders Number:</b> 0000058650503
              </Text>{" "}
              <br></br> <br></br> <br></br>
              <Text>
                <center>
                  <i>
                    Please transfer the exact amount you specified in the form
                    to this account for the processing of your deposit.
                  </i>
                </center>
              </Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
      default:
        return (
          <>
            <ModalHeader>Deposit</ModalHeader>
            <ModalBody>
              <Text>Deposit Content Here</Text>
            </ModalBody>
            <ModalFooter>
              <IconButton
                onClick={() => handleSaveButtonClick()}
                aria-label="Acknowledge"
                icon={<FaCheck />}
                ml="auto" // This pushes the button to the right
              />
            </ModalFooter>
          </>
        );
    }
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
    // Clear the modal content
    setModalContent(null);
  };

  const handleModalClose = () => {
    // Display toast message if the image is not saved
    toast({
      title: "Kindly close this window by clicking the check button.",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSaveButtonClick = () => {
    closeModal(); // Close the modal
  };


  const isDepositButtonDisabled =
    !formData.amount ||
    !formData.depositCurrency ||
    !formData.yourEmail ||
    !formData.depositDestination;

  false; // Default: enable button

  return (
    <Box
      p={4}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      className={styles.formContainer}
      width={["100%", "100%", "80%", "60%"]}
      mx="auto"
    >
      <Heading fontSize="xl" mb={4} textAlign="center">
        Deposit
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Amount:</FormLabel>
        <Input
          placeholder="0.0"
          type="number"
          value={formData.amount}
          required
          onChange={(event) => handleChange(event, "amount")}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Select Deposit Currency:</FormLabel>
        <Select
          placeholder="Deposit Currency"
          value={formData.depositCurrency}
          required
          onChange={(event) => handleChange(event, "depositCurrency")}
        >
          <option value="CFA">CFA</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
        </Select>
      </FormControl>

      {formData.depositCurrency === "EUR" && (
        <FormControl mb={4}>
          <FormLabel>Select Deposit Destination:</FormLabel>
          <Select
            placeholder="Deposit Destination"
            value={formData.depositDestination}
            required
            onChange={(event) => handleChange(event, "depositDestination")}
          >
            <option value="GCash">GCash</option>
            <option value="BankTransfer">Bank Transfer</option>
          </Select>
        </FormControl>
      )}

      {formData.depositCurrency === "CFA" && (
        <FormControl mb={4}>
          <FormLabel>Select Deposit Destination:</FormLabel>
          <Select
            placeholder="Deposit Destination"
            value={formData.depositDestination}
            required
            onChange={(event) => handleChange(event, "depositDestination")}
          >
            <option value="Paynow">Paynow</option>
            <option value="BankTransfer">Bank Transfer</option>
          </Select>
        </FormControl>
      )}
      {formData.depositCurrency === "USD" && (
        <FormControl mb={4}>
          <FormLabel>Select Deposit Destination:</FormLabel>
          <Select
            placeholder="Deposit Destination"
            value={formData.depositDestination}
            required
            onChange={(event) => handleChange(event, "depositDestination")}
          >
            <option value="GCash">GCash</option>
            <option value="BankTransfer">Bank Transfer</option>
          </Select>
        </FormControl>
      )}

      <FormControl mb={4}>
        <FormLabel>Email:</FormLabel>
        <Input
          placeholder="youremail@gmail.com"
          type="email"
          value={formData.yourEmail}
          required
          onChange={(event) => handleChange(event, "yourEmail")}
        />
      </FormControl>
      <Flex justifyContent="center" mt={4}>
        <Button
          onClick={handleEmailButtonClick}
          isDisabled={isDepositButtonDisabled}
        >
          Deposit
        </Button>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deposit Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalContent}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
