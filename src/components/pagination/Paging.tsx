import "./Paging.css";
import Pagination from "react-js-pagination";

type TPaging = {
  count: number;
  changePageHandler: (page: number) => void;
  page: number;
  pageSize: number;
};

const Paging = ({ count, changePageHandler, page, pageSize }: TPaging) => {
  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={pageSize} // 한 페이지에 보여줄 게시글 갯수
      totalItemsCount={count} // 총 게시글 갯수
      pageRangeDisplayed={5} // paginator의 페이지 범위
      prevPageText={"‹"} // "이전"을 나타낼 텍스트
      nextPageText={"›"} // "다음"을 나타낼 텍스트
      onChange={changePageHandler} // 페이지 변경을 핸들링하는 함수
    />
  );
};

export default Paging;
