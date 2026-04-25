import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Award } from 'lucide-react';
import axios from 'axios';
import './Results.css';

const Results = () => {
  const [studentId, setStudentId] = useState('');
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!studentId.trim()) return;

    setLoading(true);
    setError('');
    setSearched(true);

    try {
      const response = await axios.get(`http://localhost:30000/api/students/result/${studentId.trim()}`);
      setResult(response.data);
    } catch (err) {
      setResult(null);
      setError(err.response?.data?.message || 'Student not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="results-page animate-fade-in">
      <div className="container py-8 results-container">
        
        <div className="results-header text-center mb-12">
          <h1 className="text-gradient">Student Results Portal</h1>
          <p className="subtitle">Enter your official UNISHARE Student ID to verify your course completion and verify your results.</p>
        </div>

        <div className="search-section glass">
          <form className="search-form" onSubmit={handleSearch}>
            <input 
              type="text" 
              className="input-field search-input" 
              placeholder="e.g. UNI001" 
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <button type="submit" className="btn btn-primary search-btn">
              <Search size={20} /> Check Result
            </button>
          </form>
          <div className="hint-text">
            Hint: Try <strong>UNI001</strong>, <strong>UNI002</strong>, or <strong>UNI003</strong>
          </div>
        </div>

        <div className="result-display-area">
          {loading && <div className="loading">Searching...</div>}
          {error && <div className="error-message">{error}</div>}
          {searched && !loading && !error && (
            <div className={`result-card glass animate-fade-in ${result ? 'success' : 'error'}`}>
              {result ? (
                <div className="result-success">
                  <div className="status-icon pass">
                    <CheckCircle size={48} />
                  </div>
                  <h2>Result Found</h2>
                  
                  <div className="result-details">
                    <div className="detail-row">
                      <span className="detail-label">Student Name:</span>
                      <span className="detail-value">{result.name}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Index:</span>
                      <span className="detail-value">{result.index}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Enrolled Course:</span>
                      <span className="detail-value">{result.course}</span>
                    </div>
                    <h3>Results:</h3>
                    {result.results.map((res, idx) => (
                      <div key={idx} className="detail-row">
                        <span className="detail-label">{res.subject}:</span>
                        <span className="detail-value">{res.grade} ({res.marks})</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="certificate-badge">
                    <Award size={24} /> Official UNISHARE record
                  </div>
                </div>
              ) : (
                <div className="result-error">
                  <div className="status-icon fail">
                    <XCircle size={48} />
                  </div>
                  <h2>No Record Found</h2>
                  <p>We could not find any results matching Index: <strong>{studentId.toUpperCase()}</strong>.</p>
                  <p>Please check your Index and try again, or contact the administration desk for assistance.</p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Results;
