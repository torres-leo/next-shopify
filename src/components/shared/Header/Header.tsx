import Navbar from '@/components/Navbar/Navbar';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';

async function Header() {
	const customer = await validateAccessToken();

	return (
		<header>
			<Navbar user={customer?.firstName} />
		</header>
	);
}

export default Header;
