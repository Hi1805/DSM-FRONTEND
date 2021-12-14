import { FileAttribute, PopupSendEmail } from "containers/PopupSendEmail";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Style from "./style";
import { toast } from "react-toastify";

export const SendEmail = () => {
  const [filesState, setFilesState] = React.useState<Array<FileAttribute>>([]);

  const [dataSend, setDataSend] = React.useState<{
    subject: string;
    files: FileAttribute[];
    type_send: "teachers" | "students";
    content: string;
  }>({
    subject: "",
    files: [],
    type_send: "teachers",
    content: "",
  });

  const handleChangeContent = (e: React.ChangeEvent<any>) => {
    setDataSend({
      ...dataSend,
      content: e.target.value,
    });
  };

  const handleChangeSubject = (e: React.ChangeEvent<any>) => {
    setDataSend({
      ...dataSend,
      subject: e.target.value,
    });
  };
  const handleChangeTypeSend = (e: React.ChangeEvent<any>) => {
    setDataSend({
      ...dataSend,
      type_send: e.target.value,
    });
  };

  const [isOpenSending, setIsOpenSending] = React.useState(false);
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      const data = await toBase64(file);

      setFilesState([
        ...filesState,
        { filename: file.name, content: data, encoding: "base64" },
      ]);
      e.target.value = "";
    }
  };
  const handleDeleteFile = (index: number) => {
    setFilesState(filesState.filter((_, i) => i !== index));
  };

  const onSubmit = () => {
    if (dataSend.subject === "" || dataSend.content === "") {
      toast.error("Please fill subject and content");
      return;
    }
    setIsOpenSending(true);
    setDataSend({ ...dataSend, files: filesState });
  };
  const ItemFileUpload = ({ id = 0, name = "" }) => {
    return (
      <div className="item-file text-center mt-2">
        {name}
        <AiOutlineDelete
          style={{
            float: "right",
            marginRight: "1rem",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => handleDeleteFile(id)}
          color="red"
        />
      </div>
    );
  };
  return (
    <Style>
      <div className="layout__content__form">
        <div className="form__title">
          <h4>Send Type:</h4>
          <select
            className="form__title__select form-select"
            onChange={handleChangeTypeSend}
          >
            <option value={"teachers"} selected>
              Teachers
            </option>
            <option value={"students"}>Students</option>
          </select>
        </div>
        <div className="form__body">
          <div className="form-group form__body__title">
            <label htmlFor="title_email">Title</label>
            <input
              type="text"
              className="form-control"
              id="title_email"
              placeholder="Example: Happy New Year"
              onChange={handleChangeSubject}
            />
          </div>
          <div className="form-group content">
            <label htmlFor="content_email">Content</label>
            <textarea
              id="input_content_email"
              className="form-control"
              rows={5}
              onChange={handleChangeContent}
              placeholder="Example: Hello world"
            />
          </div>
          <div className="upload">
            <div className="show-file col-md-8">
              {filesState.map((item, index) => (
                <ItemFileUpload key={index} id={index} name={item.filename} />
              ))}
            </div>
            <div className="btn-file col-md-4">
              <label
                htmlFor="upload_file"
                className="upload__button text-center"
              >
                Upload file
                <i className="fas fa-upload"></i>
              </label>
              <input
                style={{
                  height: 0,
                  width: 0,
                }}
                type="file"
                name="upload_file"
                id="upload_file"
                onChange={handleUploadFile}
              ></input>
            </div>
          </div>

          <div className="form__body__buttonSend">
            <button
              type="button"
              onClick={onSubmit}
              className="btn btn-success send"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {isOpenSending && (
        <PopupSendEmail
          isOpen={isOpenSending}
          turnOffPopup={() => setIsOpenSending(false)}
          {...dataSend}
          files={filesState}
        />
      )}
    </Style>
  );
};
