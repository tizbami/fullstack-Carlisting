import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const TeamList = () => {
  const Styles = {
    grid: {
      display: "grid",
     gridTemplateColumns: "repeat(4, 1fr)",
      padding: "20px",
    },
  }
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  //write a funtion using fetch api
  const fetchTeam = async () => {
    setLoading(true);

    const url = "https://api.github.com/users";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
        const data = await response.json();
        setTeam(data);
        setLoading(false);
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    
  };
  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div>
      <h1>Team List</h1>
      {loading && <p>Loading...</p>}

      <div style={Styles.grid}>
        {team.map((team) => (
          <TeamCard
            key={team.id}
            username={team.login}
            imgUrl={team.avatar_url}
            link={team.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
