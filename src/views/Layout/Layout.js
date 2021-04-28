
import  Header  from '../../Component/Layout/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;