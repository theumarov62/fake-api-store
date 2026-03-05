import type { User } from "@/root/types/users";
import { useThemeStore } from "@/zustand/store";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loader, setLoader] = useState(true);
  const { darkMode } = useThemeStore();
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      setUsers(res.data);
    } finally {
      setLoader(false);
    }
  }

  if (loader) {
    return (
      <h2 className="text-black text-center mt-50 text-[25px]">
        Yuklanmoqda . . .
      </h2>
    );
  }
  return (
    <section className="pt-2 pb-2">
      <div className="max-w-[1400px] w-[100%] ml-auto mr-auto">
        <h2 className="text-[30px] text-center mb-[20px]">Foydalanuvchilar</h2>
        <div className="flex items-center flex-wrap gap-2">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="card w-96 card-md shadow-sm"
                style={{
                  border: darkMode
                    ? "1px solid #3c3c3c"
                    : " 1px solid #ffffff4424",
                }}
              >
                <div className="card-body">
                  <h2 className="card-title">
                    {user.name.firstname[0].toUpperCase() +
                      user.name.firstname.slice(1)}{" "}
                    {user.name.lastname[0].toUpperCase() +
                      user.name.lastname.slice(1)}
                  </h2>
                  <p className="opacity-[50%]">City: {user.address.city}</p>
                  <p className="opacity-[50%]">Number: {user.address.number}</p>
                  <p className="opacity-[50%]">Street: {user.address.street}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
