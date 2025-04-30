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
import {formatDate} from "../utils/formatDate.js"
import { IndianRupee, Pencil, RefreshCw, Trash2 } from "lucide-react";

function ProductCard({ product }) {
  const { deleteProducts, fetchProducts } = useProductStore();
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
    fetchProducts();
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
      <a href={product.purchaseLink} target="_blank">
        <Image
          src={product.image}
          alt={product.name}
          h="230px"
          w="full"
          objectFit="cover"
        />
      </a>

      <Box p={4} >
        <HStack className="flex justify-between">
          <div>
            <Heading as="h3" size="lg" fontWeight={"bold"} mb={2}>
              {product.name}
            </Heading>

            <Text fontWeight="bold" fontSize="xl" mb={4} >
            <IndianRupee size={18} style={{display: "inline"}} />{product.price}
            </Text>

            <p className="description">{product.description}</p>
          </div>
        </HStack>
        <br />
        <hr style={{
          width: "100%",
          marginBottom: "20px",
          borderBottom: "1px solid #6a7282",
          borderRadius: "4px",
          opacity: "0.5"
        }} />
        <div className="flex justify-between">
          <div>
            <button
              style={{
                backgroundColor: "#51a2ff",
                padding: "7px 15px",
                borderRadius: "5px",
                margin: "5px"
              }}
              className="cursor-pointer"
              onClick={() => navigate("/update", { state: { product } })}
            >
              <Pencil />
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
              <Trash2 />
            </button>
          </div>
          <div className="timeDetail flex flex-col text-sm text-gray-500">
            <span>Created: {formatDate(product.createdAt)}</span>
            <span>Updated: {formatDate(product.updatedAt)}</span>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default ProductCard;
