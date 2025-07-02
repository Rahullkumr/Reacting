const customStyle = {
    footer: {
        backgroundColor: "teal",
        padding: "30px",
        color: 'white'
    },
    flexibleContainer:{
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "30px"
    },
    icons: {
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "30px",
        fontSize: "3rem",
    }
}
export const Footer = () => {
  return <footer style={customStyle.footer}>
    <h1 style={{fontSize: "30px", color: "blue", textAlign: "center"}}>A Reusable Footer Component</h1>
    <ul style={customStyle.flexibleContainer}>
        <li>Fitness Dashboard</li>
        <li>Watch Videos</li>
        <li>Privacy Policy</li>
    </ul>
    <ul style={customStyle.flexibleContainer}>
        <li>Services</li>
        <li>Discord</li>
        <li>Terms & Conditions</li>
    </ul>
    <ul>
        <li>
            <p style={{textAlign:"center"}}>© 2025 Fitness Dashboard. All Rights Reserved.</p>
        </li>
    </ul>
    <ul style={customStyle.icons}>
        <li><a href="#">🎮</a></li>
        <li><a href="#">🐓</a></li>
        <li><a href="#">💻</a></li>
        <li><a href="#">🏀</a></li>
    </ul>
  </footer>;
};
