import { useProductStore } from "../store/product.js";
import { useLocation, useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster.jsx";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function UpdatePage() {
  const navigate = useNavigate()
  //data is coming from ProductCard while clicking update button
  const location = useLocation();
  const product = location.state?.product; //Access the product data
  // end
  // console.log(product)
  const [ updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
    description: product.description,
    purchaseLink: product.purchaseLink,
  });

  const { updateProduct } = useProductStore();

  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct( product._id , updatedProduct);
    // console.log(success, message)

    if (!success) {
      toaster.create({
        type: "error",
        description: message,
      });
    } else{
      toaster.create({
        type: "success",
        description: "Product Updated",
      });
      navigate("/")
    }
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Update the Product
        </Heading>

        <Box
          w={"full"}
          // bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Description"
              name="description"
              type="textarea"
              value={updatedProduct.description}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, description: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
            />
            <Input
              placeholder="Purchase Link"
              name="purchaseLink"
              value={updatedProduct.purchaseLink}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, purchaseLink: e.target.value })
              }
            />

            <Button colorScheme="blue" onClick={handleUpdateProduct} w="full">
              Update
            </Button>
            <Button
              style={{ backgroundColor: "red" }}
              colorScheme="blue"
              onClick={() => navigate("/")}
              w="full"
            >
              Cancel
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default UpdatePage;
