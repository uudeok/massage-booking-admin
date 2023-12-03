import styled from "styled-components";
import { NOTICE_CATEGORIES } from "../../const/notice";

type TProps = {
  postNoticeHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  changeInputHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

const NewNoticeForm = ({ postNoticeHandler, changeInputHandler }: TProps) => {
  return (
    <FormLayoutStyle onSubmit={postNoticeHandler} onChange={changeInputHandler}>
      <LabelBoxStyle>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          required
          placeholder="제목을 입력하세요"
        />
        <label htmlFor="category">분류</label>
        <select name="category">
          {NOTICE_CATEGORIES.map((item, index) => (
            <option key={index} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
      </LabelBoxStyle>
      <ButtonStyle>등록하기</ButtonStyle>
    </FormLayoutStyle>
  );
};

export default NewNoticeForm;

const FormLayoutStyle = styled.form`
  display: flex;
`;

const LabelBoxStyle = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const ButtonStyle = styled.button`
  background-color: #1677ff;
  color: white;
  padding: 1rem;
`;
