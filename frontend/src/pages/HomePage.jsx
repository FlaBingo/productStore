import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "../components/ui/toaster";
import ProductCard from "../components/ProductCard";
import { ShoppingCart } from "lucide-react";

function HomePage() {
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  // console.log("products", products)


  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          style={{fontSize: "25px"}}
          textAlign={"center"}
        >
          Current Products <ShoppingCart style={{display: "inline"}}/>
        </Text>

        <SimpleGrid
          style={{marginTop: "10px"}}
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product, index) => (
            <ProductCard key={product._id || index} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage;
