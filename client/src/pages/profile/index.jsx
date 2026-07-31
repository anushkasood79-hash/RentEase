import { useState } from "react";
import Navbar from "../../components/navbar";

function Profile() {
  const [user, setUser] = useState({
    name: "Anushka Sood",
    email: "anushka@gmail.com",
    phone: "+91 9876543210",
    address: "Dehradun, Uttarakhand"
  });

  const handleEdit = () => {
    alert("Profile updated successfully!");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 py-14">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div className="space-y-6">

            <div>
              <label className="font-semibold">Full Name</label>

              <input
                value={user.name}
                onChange={(e)=>
                  setUser({...user,name:e.target.value})
                }
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>

              <input
                value={user.email}
                onChange={(e)=>
                  setUser({...user,email:e.target.value})
                }
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Phone</label>

              <input
                value={user.phone}
                onChange={(e)=>
                  setUser({...user,phone:e.target.value})
                }
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Address</label>

              <textarea
                value={user.address}
                onChange={(e)=>
                  setUser({...user,address:e.target.value})
                }
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>

          </div>

        </div>
      </section>
    </>
  );
}

export default Profile;