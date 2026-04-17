import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Здесь имитация получения данных пользователя и аналитики
  const analytics = {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };

return {
    props: {
      user: { name: "Demo User", role: "user" },
      analytics,
      currentTime: new Date().toISOString(), // Покажет разницу SSR
    },
  };
};

export default function Dashboard({ user, analytics, currentTime }: any) {
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Views: {analytics.pageViews}</p>
      <footer>Last updated: {currentTime}</footer>
    </div>
  );
}