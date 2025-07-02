const customStyle = {
  card: {
    border: "5px solid #f89808",
    borderRadius: "10px",
    width: "100%",
    padding: "20px",
    margin: "10px 0",
    backgroundColor: "#f5f6f7",
    width: "40%",
  },
  cardTitle: {
    borderBottom: "4px solid #f89808",
    width: "fit-content",
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#1b1b32",
  },
};
export function Card({ name, title, bio }) {
  return (
    <div style={customStyle.card}>
      <h2>{name}</h2>
      <p style={customStyle.cardTitle}>{title}</p>
      <p>{bio}</p>
    </div>
  );
}

export function MyApp() {
  return (
    <div style={customStyle.body}>
      <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "50px"}}>Reusable Profile Card with Props Drilling</h1>      
      <div style={customStyle.flexContainer}>
        <Card
          name={"Manish Kumar"}
          title={"Frontend developer"}
          bio={
            "I like to work with different frontend technologies and play video games."
          }
        />
        <Card
          name={"Raj Verma"}
          title={"Engineering manager"}
          bio={
            "I have worked in tech for 15 years and love to help people grow in this industry."
          }
        />
        <Card
          name={"Abhishek Sontakke"}
          title={"Backend developer"}
          bio={
            "I have been a software developer for over 20 years and I love working with Go and Rust."
          }
        />
      </div>
    </div>
  );
}
