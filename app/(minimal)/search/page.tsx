import React from "react";

interface SearchProps {
    searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchProps) {
    // Await the searchParams to extract the query text safely in Next.js 15
    const { q } = await searchParams;

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h1 className="text-xl font-bold text-gray-800 m-0">Search Results</h1>

            {q ? (
                <p className="text-sm text-gray-500 mt-1">
                    Showing results for: <span className="font-semibold text-blue-600">"{q}"</span>
                </p>
            ) : (
                <p className="text-sm text-gray-500 mt-1">
                    Enter a keyword in the search bar to find people or posts.
                </p>
            )}

            <div className="mt-6 pt-6 border-t border-gray-100 text-gray-500 text-sm">
                Search query processing and filtered list items will be displayed here.
            </div>
        </div>
    );
}