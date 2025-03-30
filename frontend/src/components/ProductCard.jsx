import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";
// import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { toaster } from "./ui/toaster";

function ProductCard({ product }) {
  const { deleteProducts } = useProductStore();
  const navigate = useNavigate();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProducts(pid);
    if (!success) {
      toaster.create({
        type: "error",
        description: message,
        duration: 2000,
      });
    } else {
      toaster.create({
        type: "success",
        description: message,
        duration: 2000,
      });
    }
  };

  return (
    <Box
      style={{ margin: "10px" }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      //   bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <HStack className="flex justify-between">
          <div>
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>

            <Text fontWeight="bold" fontSize="xl" mb={4}>
              ${product.price}
            </Text>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#51a2ff",
                padding: "7px 15px",
                borderRadius: "5px",
                margin: "5px"
              }}
              className="cursor-pointer"
              onClick={() => navigate("/update", {state: { product }})}
            >
              Update
            </button>
            <button
              style={{
                backgroundColor: "#e94444",
                padding: "7px 15px",
                borderRadius: "5px",
                margin: "5px"
              }}
              className="cursor-pointer"
              onClick={() => handleDeleteProduct(product._id)}
            >
              Delete
            </button>
          </div>
        </HStack>
      </Box>
    </Box>
  );
}

export default ProductCard;
