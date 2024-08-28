import { useState, useEffect } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    gender: '',
    location: '',
    city: '',
    birthDate: '',
    profilePic: '',
    description: '',
    job: '',
    onlineStatus: false,
  });

  const [profilePicFile, setProfilePicFile] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePicFile(file);
  };

  const handleSave = () => {
    const updatedUser = { ...user };
    if (profilePicFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatedUser.profilePic = reader.result;
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
      };
      reader.readAsDataURL(profilePicFile);
    } else {
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  return (
    <section className="pt-16 bg-blueGray-50">
      <div className="w-full lg:w-8/12 xl:w-6/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg mt-16">
          <div className="px-6 py-6">
            <div className="flex flex-col items-center">
              {user.profilePic && (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-32  border-[4px] border-green-500  h-32 lg:w-40 lg:h-40 rounded-full mb-4"
                />
              )}
              <input
                type="file"
                onChange={handleProfilePicChange}
                className="mb-4  py-2"
              />
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl w-full"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl w-full mt-2 sm:mt-0"
                  />
                </div>
                <input
                  type="text"
                  name="gender"
                  value={user.gender}
                  onChange={handleInputChange}
                  placeholder="Gender"
                  className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl"
                />
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <input
                    type="text"
                    name="location"
                    value={user.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl w-full"
                  />
                  <input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl w-full mt-2 sm:mt-0"
                  />
                </div>
                <input
                  type="date"
                  name="birthDate"
                  value={user.birthDate}
                  onChange={handleInputChange}
                  placeholder="Date of Birth"
                  className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl"
                />
                <input
                  type="text"
                  name="job"
                  value={user.job}
                  onChange={handleInputChange}
                  placeholder="Job Title"
                  className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl"
                />
                <textarea
                  name="description"
                  value={user.description}
                  onChange={handleInputChange}
                  placeholder="Describe yourself..."
                  className="py-2 px-4 text-sm outline-none text-black border border-yellow-600 rounded-xl"
                />
                
                <button
                  onClick={handleSave}
                  className="py-2 px-8 hover:bg-yellow-400 duration-300 text-white hover:text-black rounded-xl bg-yellow-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
