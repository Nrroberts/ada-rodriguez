export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Contact Header */}
          <div className="md:flex-shrink-0">
            <h3 className="text-lg text-black font-medium">Contact</h3>
          </div>

          {/* Contact Information Table */}
          <div className="flex-1">
            <div className="space-y-4">
              {/* Email Row */}
              <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-200">
                <div className="text-lg text-black font-medium w-full sm:w-32 mb-1 sm:mb-0">
                  Email
                </div>
                <div className="text-lg text-black">
                  <a 
                    href="mailto:ada698@comcast.net" 
                    className="hover:text-custom-gray transition-colors"
                  >
                    ada698@comcast.net
                  </a>
                </div>
              </div>

              {/* Phone Row */}
              <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-200">
                <div className="text-lg text-black font-medium w-full sm:w-32 mb-1 sm:mb-0">
                  Phone Number
                </div>
                <div className="text-lg text-black">
                  <a 
                    href="tel:860-559-0461" 
                    className="hover:text-custom-gray transition-colors"
                  >
                    860 559 0461
                  </a>
                </div>
              </div>

              {/* LinkedIn Row */}
              <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-200">
                <div className="text-lg text-black font-medium w-full sm:w-32 mb-1 sm:mb-0">
                  LinkedIn
                </div>
                <div className="text-lg text-black">
                  <a 
                    href="https://www.linkedin.com/in/ada-rodrigues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-custom-gray transition-colors"
                  >
                    Ada Rodrigues
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}