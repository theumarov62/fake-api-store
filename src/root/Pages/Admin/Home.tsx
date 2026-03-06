import type { User } from "@/root/types/users";
import { useThemeStore } from "@/zustand/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

function AdminDashboard() {
  const { darkMode } = useThemeStore();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      setUsers(res.data);
    } catch {}
  }
  return (
    <section
      style={{
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#fff" : "#121212",
      }}
      className="max-w-[1400px] w-[100%] ml-auto mr-auto"
    >
      <h2 className="text-center text-bold text-[30px] mb-5">
        Foydalanuvchilar
      </h2>
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
                <p className="opacity-[50%">Password: {user.password}</p>
                <button className="btn btn-accent w-[80px] h-[30px]">
                  Qo'shish
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AdminDashboard;
