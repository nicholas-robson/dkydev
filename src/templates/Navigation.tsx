const Navigation = () => (
<nav className="bg-brand-primary mb-6">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between">
      <div className="flex-1 flex items-center justify-center">
          <div className="flex">
            <a href="/" className="text-gray-300 hover:text-gray-800 hover:no-underline hover:bg-brand-secondary px-12 py-4 text-lg font-medium" aria-current="page">about</a>
            <a href="/posts" className="text-gray-300 hover:text-gray-800 hover:no-underline hover:bg-brand-secondary px-12 py-4 text-lg font-medium">posts</a>
          </div>
      </div>
    </div>
  </div>
</nav>
);

export { Navigation };
