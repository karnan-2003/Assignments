function ProfileCard({ name, job, avatar}){
    return(
        <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
            <h3>6.Profile Card</h3>
            <img src={avatar} alt=""    style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px"
        }} />
            
        <h3>{name}</h3>
        <p>{job}</p>
        </div>

    );
};
export default ProfileCard;