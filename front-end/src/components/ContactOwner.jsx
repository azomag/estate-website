import Swal from 'sweetalert2'


export default function ContactOwner() {
  const showSwal = () => {
    Swal.fire({
      title: "Good job!",
      text: "Your message is being processed. You will receive a response in your email. ",
      icon: "success"
    });
  }
  return (
    <div className="w-full py-20">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">House Purchase Form</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              id="Email"
              name="Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              id="zip-code"
              name="zip-code"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              name="gender"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="choice" className="block text-sm font-medium text-gray-700">Choice</label>
            <select
              id="choice"
              name="choice"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            >
              <option value="">Select Option</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 capitalize">Write message for the owner</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit" onClick={showSwal}
            className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
