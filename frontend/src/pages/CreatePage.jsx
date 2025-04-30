import { useProductStore } from "../store/product.js";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster.jsx";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

function CreatePage() {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "", 
    purchaseLink: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct)
    // console.log(success, message)

    if(!success){
      toaster.create({
        type: "error",
        description: message,
        action: {
          label: "Dismiss"
        }
      })
      return;
    }else{
      toaster.create({
        type: "success",
        description: message,
        action: {
          label: "Home",
          onClick: () => navigate("/"),
        }
      })
      navigate("/")
    }
    setNewProduct({name: "", price: "", image: ""});
  }


  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
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
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Description"
              name="description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Input
              placeholder="Link, Ex.'amazon.in/'"
              name="purchaseLink"
              value={newProduct.purchaseLink}
              onChange={(e) =>
                setNewProduct({ ...newProduct, purchaseLink: e.target.value })
              }
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default CreatePage;
