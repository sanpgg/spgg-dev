import Head from 'next/head';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import Sidebar from 'components/Layout/Sidebar';
import Breadcrumbs from 'components/Layout/Breadcrumbs';
import { Container, WrapperPage, ContentRight } from 'components/Layout/Grid/styles';

const Layout =({children}) =>{
	return(
		<div className="flex wrapper">
			<Header/>
			<div className="relative flex">
				<Sidebar/>
				<ContentRight>
					<Container>
						<Breadcrumbs/>
						{children}
					</Container>
				</ContentRight>
			</div> 
			<Footer/>
		</div>
	);
};
export default Layout;