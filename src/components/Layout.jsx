import PropTypes from 'prop-types'
import Header from "./Header";
import Footer from "./Footer"

function Layout({ children }){
    return(
        <>
        <main>{children}</main>
        <Header />
        <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout