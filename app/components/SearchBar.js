"use client";

export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        {/* Search Input */}
        <input
          type="text"
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm"
          placeholder="Search products by name or category..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
        
        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={() => onSearch("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Search Tips */}
      {!searchTerm && (
        <div className="mt-2 text-sm text-gray-500">
          <span className="hidden sm:inline">Try searching for: </span>
          <span className="inline sm:hidden">Search tips: </span>
          <span className="text-blue-600 font-medium">electronics</span>
          <span className="text-gray-400 mx-1">•</span>
          <span className="text-blue-600 font-medium">clothing</span>
          <span className="text-gray-400 mx-1">•</span>
          <span className="text-blue-600 font-medium">jewelry</span>
        </div>
      )}
    </div>
  );
}
