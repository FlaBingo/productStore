import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useColorMode } from "./ui/color-mode";
import { useAuthStore } from "../store/authStore.js";
import toast from "react-hot-toast";
// import { PlusSquareIcon } from "@chakra-ui/icons";
// import { IoMoon } from "react-icons/io5";
// import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navigate = useNavigate();
	const {user, logout, message} = useAuthStore();

	const handleLogout = async () => {
		const success = await logout();
		if(success){
			toast.success("Logged Out Successfully")
			navigate("/")
		}
		else{
			toast.error(message)
		}
	}

	return (
		<Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					// bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
          color={"#51a2ff"}
				>
					<Link to={"/"} id="logo">{user.name.split(" ")[0] || "FlaBingo"}'s Store 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
              +
							{/* <PlusSquareIcon fontSize={20} /> */}
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? "Dark" : "Light"}
					</Button>
					<Button onClick={handleLogout}>
						Logout
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;