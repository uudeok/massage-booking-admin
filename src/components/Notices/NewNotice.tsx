import { useInput } from "../../hooks/useInput";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftjsToHtml from "draftjs-to-html";
import styled from "styled-components";
import NewNoticeForm from "./NewNoticeForm";

const NewNotice = () => {
  const { inputValue, changeInputHandler } = useInput({
    title: "",
    category: "",
  });

  const { title, category } = inputValue;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlString, setHtmlString] = useState("");

  const postNoticeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      title: title,
      category: category,
    };
    console.log(obj);
    console.log(editorState);
    console.log(htmlString);
  };

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent()));
    setHtmlString(html);
  };

  const uploadCallback = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const formData = new FormData();
        formData.append("multipartFiles", file);
        console.log(formData);
        // const res = await axios.post('http://localhost:8080/uploadImage', formData);
        // resolve({ data: { link: res.data } });
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <NewNoticeForm
        postNoticeHandler={postNoticeHandler}
        changeInputHandler={changeInputHandler}
      />
      <EditorBoxStyle>
        <Editor
          placeholder="내용을 작성해주세요."
          localization={{
            locale: "ko",
          }}
          toolbar={{
            image: { uploadCallback: uploadCallback },
          }}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          editorStyle={{
            height: "30rem",
            width: "100%",
            border: "3px solid lightgray",
            padding: "20px",
          }}
        />
        <ViewerStyle
          dangerouslySetInnerHTML={{ __html: htmlString }}
        ></ViewerStyle>
      </EditorBoxStyle>
    </>
  );
};

export default NewNotice;

const EditorBoxStyle = styled.div`
  width: 100%;
  display: flex;
`;

const ViewerStyle = styled.div`
  width: 50%;
  border: 1px solid black;
  padding: 1rem;
`;
