import { useState } from "react";
import "./App.css";

function App() {
  // 입력 값과 리스트를 저장할 상태를 설정
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [list, setList] = useState([]);

  // 항목과 비용을 List 상태에 추가하는 함수
  const handleSubmit = (event) => {
    event.preventDefault(); // 페이지 새로고침 방지
    if (item && cost) {
      const newItem = {
        id: Date.now(), // 고유 ID 생성
        title: item,
        cost: cost,
      };
      setList([...list, newItem]); // 리스트에 새 항목 추가
      setItem(""); // 입력 필드 초기화
      setCost(""); // 입력 필드 초기화
    }
  };

  // 모든 항목을 삭제하는 함수
  const handleClearList = () => {
    setList([]); // 리스트 상태를 빈 배열로 설정
  };

  //하나의 리스트 삭제하는 함수
  const handleRemoveList = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1>예산 계산기</h1>
        <form className="contentBox" onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <div>
              <p>지출 항목</p>
              <input
                type="text"
                className="inputBox"
                placeholder="예) 렌트비"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </div>
            <div>
              <p>비용</p>
              <input
                type="text"
                className="inputBox"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
          </div>
          <div>
            <input type="submit" className="submitBtn" value="제출" />
          </div>
          {list.map((data) => (
            <div className="itemList" key={data.id}>
              <p>{data.title}</p>
              <p>{data.cost}</p>
              <button
                type="button"
                className="removeBtn"
                onClick={() => handleRemoveList(data.id)}
              >
                X
              </button>
            </div>
          ))}
          <button type="button" className="resetBtn" onClick={handleClearList}>
            목록 지우기
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
