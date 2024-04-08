import Container  from "react-bootstrap/Container"
import Image from 'react-bootstrap/Image'
import Logo from "../assets/nba-logo.png"
const Header = () => {
    return <Container>
        <Image src={Logo} width="200px"  rounded /><br/>
        <h2 className="title my-4">NBA LEGENDS</h2>
    </Container>
}
export default Header