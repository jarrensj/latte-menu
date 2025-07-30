export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-8 py-16 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-light text-stone-700 mb-8 tracking-wide">
            latte.menu
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
            Upload and host your digital menu with us on latte.menu
          </p>
        </div>

        {/* Main Steps */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center text-stone-700 mb-16 tracking-wide">
            How It Works
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start space-x-8 bg-white rounded-none p-12 border border-stone-200">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-stone-600 text-stone-50 rounded-full flex items-center justify-center text-lg font-light border-2 border-stone-300">
                  1
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-light text-stone-700 mb-4 tracking-wide">
                  Check Name Availability
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  First, check if your desired url is available. For example: <code className="bg-stone-100 border border-stone-200 px-2 py-1 rounded-none text-sm font-mono text-stone-700 inline-block">latte.menu/cafe-name</code>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-8 bg-white rounded-none p-12 border border-stone-200">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-stone-600 text-stone-50 rounded-full flex items-center justify-center text-lg font-light border-2 border-stone-300">
                  2
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-light text-stone-700 mb-4 tracking-wide">
                  Enter Your Invite Code
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Type in your invite code to gain access to the upload system. This helps us curate the quality and prevent spam. Don&apos;t have an invite code? <a href="mailto:" className="text-stone-700 hover:text-stone-800 underline decoration-1 underline-offset-4">Contact us</a>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-8 bg-white rounded-none p-12 border border-stone-200">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-stone-600 text-stone-50 rounded-full flex items-center justify-center text-lg font-light border-2 border-stone-300">
                  3
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-light text-stone-700 mb-4 tracking-wide">
                  Create an account and upload your image or menu pdf
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Once your account is made, choose an available name and upload your menu file. Your file will be hosted at your custom URL immediately.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-8 bg-white rounded-none p-12 border border-stone-200">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-stone-600 text-stone-50 rounded-full flex items-center justify-center text-lg font-light border-2 border-stone-300">
                  4
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-light text-stone-700 mb-4 tracking-wide">
                  Share your new link (and generate a qr code, too)
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  We'll automatically generate a QR code that links directly to your latte.menu url. Download it and use it anywhere - business cards, flyers, or digital displays.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-8 bg-white rounded-none p-12 border border-stone-200">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-stone-600 text-stone-50 rounded-full flex items-center justify-center text-lg font-light border-2 border-stone-300">
                  5
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-light text-stone-700 mb-4 tracking-wide">
                  Update Anytime
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  Need to update your menu? Just log back in to your account to replace the file with a new version. Your url and QR code will still be the same (unless you want to change your url)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <div className="bg-white rounded-none p-12 border border-stone-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-stone-700 mb-6 tracking-wide">
              Ready to Get Started?
            </h3>
            <p className="text-stone-600 mb-8 leading-relaxed font-light">
              Have an invite code? Start hosting your menu on latte.menu today!
            </p>
            <button className="bg-stone-600 hover:bg-stone-700 text-stone-50 font-light py-4 px-10 rounded-none border-2 border-stone-600 hover:border-stone-700 transition-colors duration-300 tracking-wide">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
