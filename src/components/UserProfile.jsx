const UserProfile = ({ user, repos }) => {
    return (
      <div className="mt-4 p-4 bg-white shadow-md rounded text-center">
        <img src={user.avatar_url} alt="Avatar" className="w-24 h-24 mx-auto rounded-full" />
        <h2 className="text-xl font-bold mt-2">{user.name || user.login}</h2>
        <p className="text-gray-600">{user.bio}</p>
        <div className="mt-2 flex justify-around">
          <p>Followers: <span className="font-bold">{user.followers}</span></p>
          <p>Following: <span className="font-bold">{user.following}</span></p>
          <p>Repos: <span className="font-bold">{user.public_repos}</span></p>
        </div>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-black text-white p-2 rounded">View Profile</a>
  
        {/* Latest Repos Section */}
        <h3 className="text-lg font-bold mt-4">Latest Repositories</h3>
        <ul className="text-left">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <li key={repo.id} className="mt-2 p-2 border rounded">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold">
                  {repo.name}
                </a>
                <p className="text-sm text-gray-600">{repo.description || "No description"}</p>
                <p className="text-xs text-gray-400">Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No repositories found.</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default UserProfile;
  