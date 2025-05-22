import React, { useEffect, useState } from "react";
import useScroll from "../../hooks/useScroll";
import Dropdown from "../DropDown";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faDoorOpen,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import DropNotification from "../DropNotification";
import profileUser from "../../assets/images/user.png";
import logo from "../../assets/images/logoSamaAvenir.png";
import { useNavigate } from "react-router-dom";

export default function NavbarC() {
  const isScroll = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  const handleOpenNotif = () => setOpenNotif(!openNotif);

  const [announcements, setAnnouncements] = useState([]);

  const user = "entreprise";

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login-entreprise", { replace: true });
  };

  useEffect(() => {
    if (user) {
      setAnnouncements([
        "📥 Candidat: Fatou Ndiaye a postulé à l’offre 'Secrétaire Bilingue'.",
        "⚙️ Nouveau message : Besoin de plus d’informations sur l’offre publiée.",
        "🎓 Rappel : Vérifiez les candidatures reçues cette semaine.",
      ]);
    }
  }, [user]);

  const notifications = [
    {
      id: 1,
      community: "Développeurs React",
      message: "Session live ce soir à 18h !",
    },
    { id: 2, community: "UI/UX Designers", message: "Concours de design !" },
    { id: 3, community: "Data Science", message: "Nouveau cours disponible !" },
  ];

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const textColor = isScroll ? "text-black" : "text-white";
  const bgColor = isScroll ? "bg-white shadow-md" : "bg-green-700";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${bgColor} ${textColor} max-sm:border-b border-white`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 h-16">
        <img
          src={logo}
          alt="logo-site"
          className="w-12 h-12 object-cover bg-white max-sm:w-6 max-sm:h-6 max-sm:mx-3"
        />
        {/* Desktop Annonces */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="font-bold px-3">Message : </span>
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentAnnouncement}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium"
              >
                {announcements[currentAnnouncement]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center lg:gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          <div className="hidden lg:flex items-center gap-4">
            <img
              src={`http://127.0.0.1:8000${user?.avatar}`}
              onError={(e) => (e.currentTarget.src = profileUser)}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            />

            <Dropdown username={"Entreprise"} onLogout={handleLogout} />

            {/* Notification Icon */}
            <button
              onClick={handleOpenNotif}
              className="relative focus:outline-none"
            >
              <FontAwesomeIcon icon={faBell} size="lg" />
              {notifications.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold rounded-full px-1">
                  {notifications.length}
                </span>
              )}
              l
              {openNotif && (
                <DropNotification
                  open={openNotif}
                  onClose={handleOpenNotif}
                  notifications={notifications}
                />
              )}
            </button>

            <button onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faDoorOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 300 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-green-700 text-white p-4 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-end gap-4">
                <img
                  src={`http://127.0.0.1:8000${user?.avatar}`}
                  onError={(e) => (e.currentTarget.src = profileUser)}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                />
                <Dropdown username={user?.full_name} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
