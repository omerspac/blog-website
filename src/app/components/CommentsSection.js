"use client"
import { useState } from "react";

export default function CommentsSection({ blogId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const handleInputChange = (Event) => {
    const { name, value } = Event.target;
    if (name === "name") {
      setName(value);
    } else {
      setComment(value);
    }
  };

  const handleSubmit = (Event) => {
    Event.preventDefault();
    if (name && comment) {
      setComments([
        ...comments,
        { id: comments.length + 1, name, comment },
      ]);
      setStatus("Your comment has been posted!");
      setName("");
      setComment("");
    } else {
      setStatus("Please fill out both fields!");
    }
  };

  return (
    <div className="comments-section">
      <h3 className="text-xl font-bold underline">Comments</h3>

      {comments.length > 0 ? (
        <div className="comments-list mt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="comment mb-4">
              <p><b>{comment.name}</b></p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No comments yet.</p>
      )}

      <form className="comment-form-section mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Enter Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700">Write Comment:</label>
          <textarea
            name="comment"
            value={comment}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Write your comment"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-yellow-500 text-white rounded bg-[#f5ab35]"
        >
          Submit Comment
        </button>
      {status && <p className="text-green-500 font-bold mt-4 text-[#f5ab35]">{status}</p>}
      </form>
    </div>
  );
}