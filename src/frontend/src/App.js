import React, { useState } from 'react';
import './App.css';

function App() {
  const [serviceType, setServiceType] = useState('');
  const [userContext, setUserContext] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!serviceType || !userContext) {
      alert('서비스와 사용자 환경을 입력해주세요');
      return;
    }

    setLoading(true);
    setResults(null);
    
    try {
      const response = await fetch('http://localhost:5001/analyze-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceType,
          userContext
        })
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
      alert('분석 중 오류가 발생했습니다');
    } finally {
      setLoading(false);
    }
  };

  // Enhanced loading indicator with spinner
  const renderLoading = () => (
    <div className="loading-spinner"></div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>서비스 사용자 맞춤형 변환 도구</h1>
        <p>기존 서비스를 당신의 환경에 맞게 최적화해드립니다.</p>
        
        <div className="service-selector">
          <h2>분석할 서비스 선택</h2>
          <select 
            id="serviceSelect" 
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="">서비스를 선택하세요</option>
            <option value="notion">Notion</option>
            <option value="slack">Slack</option>
            <option value="trello">Trello</option>
            <option value="google-calendar">Google Calendar</option>
            <option value="github">GitHub</option>
            <option value="vscode">VS Code</option>
          </select>
        </div>

        <div className="user-context">
          <h2>사용자 환경 설명</h2>
          <textarea 
            id="userContext" 
            placeholder="당신의 작업 방식이나 요구사항을 입력하세요 (예: 요즘은 원거리 근무를 하고 있으며, 일정 관리와 문서 공동 작업이 중요합니다)"
            value={userContext}
            onChange={(e) => setUserContext(e.target.value)}
          />
        </div>

        <button 
          id="analyzeBtn" 
          onClick={handleAnalyze}
          disabled={loading}
        >
          {loading ? '분석 중...' : '분석 시작'}
        </button>
        
        {loading && renderLoading()}
        
        {results && (
          <div id="results" className="results">
            <h2>✨ 분석 결과</h2>
            <div className="result-item">
              <h3>서비스 분석</h3>
              <p><strong>상세 내용:</strong> {results.analysis}</p>
            </div>
            
            <div className="result-item">
              <h3>추천 사항</h3>
              <ul>
                {results.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            
            <div className="result-item">
              <h3>구현 가이드</h3>
              <p>{results.implementationGuide}</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;