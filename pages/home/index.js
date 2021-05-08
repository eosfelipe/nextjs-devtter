import AppLayout from "components/AppLayout";
import Devit from "components/Devit";
import useUser from "hooks/useUser";
import { useState, useEffect } from "react";

const HomePage = () => {
  const END_POINT = "http://localhost:3000/api/statuses/home_timeline";
  const [timeline, setTimeline] = useState([]);
  const user = useUser();
  useEffect(() => {
    user &&
      fetch(END_POINT)
        .then((res) => res.json())
        .then(setTimeline);
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map((devit) => (
            <Devit
              key={devit.id}
              username={devit.username}
              avatar={devit.avatar}
              message={devit.message}
              id={devit.id}
            />
          ))}
        </section>
        <nav></nav>
      </AppLayout>
      <style jsx>{`
        header {
          align-items: center;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
          border-bottom: 1px solid #eee;
          display: flex;
          height: 49px;
          position: sticky;
          top: 0;
          width: 100%;
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }
        nav {
          background: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default HomePage;
