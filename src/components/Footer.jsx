import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t border-gray-200">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-gray-600 text-lg font-medium">
          Rejoignez-nous et trouvez votre prochain emploi sur{" "}
          <span className="font-semibold text-green-600">Sama Avenir</span> !
        </p>

        <div className="flex items-center text-gray-500 text-sm space-x-1">
          <FaRegCopyright />
          <span>2025</span>
          <a
            href="https://samaavenir.sn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-green-700 font-semibold"
          >
            samaavenir.sn
          </a>
          <span>- Tous droits réservés</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
