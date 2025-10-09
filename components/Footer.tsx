export default function Footer(){
  return (
    <footer className="bg-white text-gray-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo-blue.svg" alt="Supreme Group" className="h-10"/>
          <p className="mt-4 text-sm">©2023. All Rights Reserved.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-3">Applications</h4>
          <ul className="space-y-1">
            <li>Apparel</li>
            <li>Automotive</li>
            <li>Filtration</li>
            <li>Customised Solutions</li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-1">
            <li>Innovation</li>
            <li>Global Competency</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
