import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ShoppingCart } from "lucide-react";
import Masonry from "react-masonry-css";

function HomePage() {

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }
  
  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);


  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          style={{fontSize: "25px", marginBottom: "20px"}}
          textAlign={"center"}
        >
          Current Products <ShoppingCart style={{display: "inline"}}/>
        </Text>

        <Masonry
          breakpointCols={breakpointColumns}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {products.map((product, index) => (
            <ProductCard key={product._id || index} product={product} />
          ))}
        </Masonry>

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
