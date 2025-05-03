import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useColorMode } from "./ui/color-mode";
import { useAuthStore } from "../store/authStore.js";
import toast from "react-hot-toast";
import { LogOut, Moon, PackagePlus, Sun } from "lucide-react";
// import { PlusSquareIcon } from "@chakra-ui/icons";
// import { IoMoon } from "react-icons/io5";
// import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navigate = useNavigate();
	const { user, logout, message } = useAuthStore();

	const handleLogout = async () => {
		const success = await logout();
		if (success) {
			toast.success("Logged Out Successfully")
			navigate('/', { replace: true });
		}
		else {
			toast.error(message)
		}
	}

	return (
		<Container maxW={"1140px"} px={4} borderBottom={'1px solid #6a7282'}>
			<Flex

				minH={{
					base: 20,
					sm: 16
				}}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
					p={{
						base: 4,
						sm: 1
					}}
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textAlign={"center"}
					color={"#51a2ff"}
				>
					<Link to={"/"} id="logo">
						{user.name?.charAt(0)?.toUpperCase() + user.name?.slice(1)?.split(" ")[0] || "FlaBingo"}'s Store 🛒
					</Link>
				</Text>

				<HStack paddingBottom={{
					base: 4,
					sm: 1
				}}
					spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button title="Create">
							<PackagePlus />
							{/* <PlusSquareIcon fontSize={20} /> */}
						</Button>
					</Link>
					<Button title="Theme" onClick={toggleColorMode}>
						{colorMode === "light" ? <Moon /> : <Sun />}
					</Button>
					<Button title="LogOut" onClick={handleLogout}>
						<LogOut />
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};
export default Navbar;