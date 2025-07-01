// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Zap } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const navItems = [
//     { name: 'Features', href: '#features' },
//     { name: 'Pricing', href: '#pricing' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//               <Zap className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-lg sm:text-xl font-bold text-gray-900">CollabSpace</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
//             <Link
//               to="/login"
//               className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
//             >
//              Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
//             >
//              register
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-white border-t border-gray-200"
//         >
//           <div className="px-4 py-4 space-y-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="block text-gray-700 hover:text-blue-600 font-medium py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//             <div className="pt-4 border-t border-gray-200 space-y-3">
//               <Link
//                 to="/login"
//                 className="block text-gray-700 hover:text-blue-600 font-medium py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Sign In
//               </Link>
//               <Link
//                 to="/login"
//                 className="block bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Zap } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useAuth0 } from '@auth0/auth0-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//     const { logout} = useAuth0();
//   const user = JSON.parse(localStorage.getItem("user")); // 🔐 check if user is logged in

//   const navItems = [
//     { name: 'Features', href: '#features' },
//     { name: 'Pricing', href: '#pricing' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact', href: '#contact' }
//   ];
// if(!user){
//   return  <div>....loading</div>
// }
//   return (
//     <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//               <Zap className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-lg sm:text-xl font-bold text-gray-900">CollabSpace</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
//             {user ? (
//               <>
//                 {user.isadmin ? (
//                   <Link
//                     to="/dashboard"
//                     className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
//                   >
//                     Admin Panel
//                   </Link>
//                 ) : (
//                   <Link
//                     to="/member"
//                     className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
//                   >
//                     Member
//                   </Link>
//                 )}
//                 <button
//                   onClick={() => {
//                     localStorage.removeItem("user");
//                     window.location.reload();
//                     logout()
//                   }}
//                   className="text-red-600 hover:text-red-800 font-medium text-sm lg:text-base"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-gray-700" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-700" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-white border-t border-gray-200"
//         >
//           <div className="px-4 py-4 space-y-4">
//             {navItems.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="block text-gray-700 hover:text-blue-600 font-medium py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}

//             <div className="pt-4 border-t border-gray-200 space-y-3">
//               {user ? (
//                 <>
//                   {user.isadmin ? (
//                     <Link
//                       to="/dashboard"
//                       className="block text-gray-700 hover:text-blue-600 font-medium py-2"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Admin Panel
//                     </Link>
//                   ) : (
//                     <Link
//                       to="/member"
//                       className="block text-gray-700 hover:text-blue-600 font-medium py-2"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Member
//                     </Link>
//                   )}
//                   <button
//                     onClick={() => {
//                       localStorage.removeItem("user");
//                       setIsMenuOpen(false);
//                       window.location.reload();
//                     }}
//                     className="block text-red-600 hover:text-red-800 font-medium py-2 w-full text-left"
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block text-gray-700 hover:text-blue-600 font-medium py-2"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Sign In
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Get Started
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { logout, isLoading } = useAuth0(); // ✅ user from Auth0
  const user = JSON.parse(localStorage.getItem("user")); // 🔐 check if user is logged in

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // ✅ Loader while Auth0 is initializing
  if (isLoading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">CollabSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm lg:text-base"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {user ? (
              <>
                {user.isadmin ? ( // ✅ Replace with actual admin email check
                  <Link
                    to="/admin/dashboard"
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
                  >
                    Admin Panel
                  </Link>
                ) : (
                  <Link
                    to="/user/member"
                    className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
                  >
                    Member
                  </Link>
                )}
                {/* <button
                  onClick={() => logout({
    redirect_uri: window.location.origin
  })}
                  className="text-red-600 hover:text-red-800 font-medium text-sm lg:text-base"
                >
                  Logout
                </button> */}<></>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm lg:text-base"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-200 space-y-3">
              {user ? (
                <>
                  {user?.email === "admin@example.com" ? (
                    <Link
                      to="/admin/dashboard"
                      className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  ) : (
                    <Link
                      to="/user/member"
                      className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Member
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      logout({ returnTo: window.location.origin });
                    }}
                    className="block text-red-600 hover:text-red-800 font-medium py-2 w-full text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
