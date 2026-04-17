import { useState, useCallback } from "react";
import { UserCard } from "./UserCard.tsx";
import { AnalyticsChart } from "./AnalyticsChart.tsx";
import { Button } from "./Button.tsx";

interface User {
  id: number;
  name: string;
  email: string;
}

export function Dashboard() {
  const [count, setCount] = useState(0);
  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  });
  const [items] = useState(["item1", "item2", "item3"]);

  // Task 4: useСallback предотвращает создание новой функции при каждом рендере
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h1>Dashboard (count: {count})</h1>
      <Button onClick={handleIncrement} label="Increment" />

      <UserCard user={user} />
      <AnalyticsChart items={items} />
    </div>
  );
}
