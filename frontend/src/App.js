import React, { useEffect, useState } from 'react';
import './App.css';
import { getHelloWorld } from './api/helloWorldApi'; // 导入 API 调用函数

function App() {
  const [message, setMessage] = useState(''); // 用于存储从后端获取的消息

  // 使用 useEffect 在组件加载时调用后端 API
  useEffect(() => {
    getHelloWorld()
      .then(response => {
        setMessage(response.data); // 将 API 返回的数据设置到状态中
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage('Failed to fetch data from the server.'); // 处理错误情况
      });
  }, []); // 空依赖数组表示只在组件加载时执行一次

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1> {/* 显示从后端获取的消息 */}
      </header>
    </div>
  );
}

export default App;