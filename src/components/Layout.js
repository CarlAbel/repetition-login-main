import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenProvider";
import { setCookie } from "react-use-cookie";

export default function Layout() {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  function handleLogout() {
    setCookie("trainer-cookie", "", { days: 0 })
		setToken(null)
		navigate("/")
  }

  return (
    <>
      <header className="bg-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">
                  <img
                    className="h-8 w-8"
                    src="#"
                    alt="Workflow"
                  />
                </NavLink>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                    exact
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-gray-900 text-white"
                  >
                    Profile
                  </NavLink>
                  {token ? (
                    <button
                      onClick={handleLogout}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Log out
                    </button>
                  ) : (
                    <NavLink
                      to="/login"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClassName="bg-gray-900 text-white"
                    >
                      Log in
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
}
