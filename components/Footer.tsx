export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 pb-8 mb-6">
        <div>
          <img src="/logo.svg" alt="Supreme Group Logo" className="h-10 mb-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3">APPLICATIONS</h4>
            <ul className="space-y-1">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">COMPANY</h4>
            <ul className="space-y-1">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">MORE</h4>
            <ul className="space-y-1">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">FOLLOW US</h4>
            <ul className="space-y-1">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Medium</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        ©2025. All Rights Reserved. Supreme House - 110, 16th Road, Chembur, Mumbai - 400071.
      </p>
    </footer>
  );
}
