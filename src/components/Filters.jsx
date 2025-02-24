import React from 'react';

const Filters = ({ onFilter }) => {
  const genres = [
    'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilter({ [name]: value });
  };

  return (
    <div className="filters">
      <select name="genre" onChange={handleChange}>
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="year"
        placeholder="Release Year"
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Min Rating (1-10)"
        min="1"
        max="10"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filters;