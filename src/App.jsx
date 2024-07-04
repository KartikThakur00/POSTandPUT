import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

const App = () => {

  // state for handling input
  const [postData, setPostData] = useState({ userId: '', title: '', body: '' });
  const [putData, setPutData] = useState({ id: '', title: '', body: '', userId: '' });

  //  state for handling response
  const [postRequestData, setPostRequestData] = useState(null);
  const [putRequestData, setPutRequestData] = useState(null);

  // handle input change
  const handlePostChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handlePutChange = (e) => {
    setPutData({ ...putData, [e.target.name]: e.target.value });
  };

  // POST request
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      const result = response;
      setPostRequestData(result);
      console.log('POST request response:', result);
    } catch (error) {
      console.error(error);
    }
  };

  // PUT request
  const handlePutSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/posts/${putData.id}`,
        data: JSON.stringify(putData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      const result = response;
      setPutRequestData(result);
      console.log('PUT request response:', result);
    } catch (error) {
      console.error('Error during PUT request:', error);
    }
  };

  return (
    <div className='outer-container'>
      <div className='flex-container'>
        <div className='card-container'>
          <h2 >POST Request</h2>
          <form onSubmit={handlePostSubmit} className='input-form'>
            <input
              type="text"
              name="title"
              value={postData.title}
              onChange={handlePostChange}
              placeholder="Title"
              required
            />
            <input
              type="text"
              name="body"
              value={postData.body}
              onChange={handlePostChange}
              placeholder="body"
              required
            />
            <input
              type="number"
              name="userId"
              value={postData.userId}
              onChange={handlePostChange}
              placeholder="User ID"
              required
            />
            <button type="submit">POST</button>
          </form>
        </div>
        <div className='card-container'>
          <h2>PUT Request</h2>
          <form onSubmit={handlePutSubmit} className='input-form'>
            <input
              type="number"
              name="id"
              value={putData.id}
              onChange={handlePutChange}
              placeholder="ID"
              required
            />
            <input
              type="text"
              name="title"
              value={putData.title}
              onChange={handlePutChange}
              placeholder="Title"
              required
            />
            <input
              type="text"
              name="body"
              value={putData.body}
              onChange={handlePutChange}
              placeholder="body"
              required
            />
            <input
              type="number"
              name="userId"
              value={putData.userId}
              onChange={handlePutChange}
              placeholder="User ID"
              required
            />
            <button type="submit">PUT</button>
          </form>
        </div>
      </div>

      <div className='res'>
        {postRequestData && <div>
          <div className='response-container'>
            <h2 >POST Response</h2>
            <p className='res-status'>
              <span>status</span>
              <span>
                {postRequestData.status}
              </span>
            </p>
            <p>
              <span>ID</span>
              <span>
                {postRequestData.data.id}
              </span>
            </p>
            <p><span>
              Title
            </span>
              <span>
                {postRequestData.data.title}
              </span>
            </p>
            <p>
              <span>Body</span>
              <span>
                {postRequestData.data.body}
              </span>
            </p>
            <p><span>
              User Id
            </span>

              <span>
                {postRequestData.data.userId}
              </span>
            </p>
          </div>
        </div>
        }
        {putRequestData && <div>
          <div className='response-container'>
            <h2>PUT Response</h2>
            <p className='res-status'>
              <span>status</span>
              <span>
                {putRequestData.status}
              </span>
            </p>
            <p>
              <span>ID</span>
              <span>
                {putRequestData.data.id}
              </span>
            </p>
            <p><span>
              Title
            </span>
              <span>
                {putRequestData.data.title}
              </span>
            </p>
            <p>
              <span>Body</span>
              <span>
                {putRequestData.data.body}
              </span>
            </p>
            <p><span>
              User Id
            </span>
              <span>
                {putRequestData.data.userId}
              </span>
            </p>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default App;
