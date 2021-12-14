import { dsmApi } from "apis";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
export interface FileAttribute {
  filename: string;
  content: string;
  encoding: "base64";
}
interface PopupSendEmailProps {
  isOpen: boolean;
  turnOffPopup: () => void;
  type_send: "teachers" | "students";
  subject: string;
  files: FileAttribute[];
  content: string;
}

export const PopupSendEmail = (props: PopupSendEmailProps) => {
  const refProgress = useRef<HTMLDivElement>(null);

  const { isOpen, turnOffPopup, type_send, subject, files, content } = props;
  const refCount = useRef<number>(10);
  const refTextCount = useRef<HTMLSpanElement>(null);
  const refInterval = useRef<NodeJS.Timer>(null);

  // fake Loading
  React.useEffect(() => {
    refCount.current = 10;
    const refInterval = setInterval(() => {
      if (refTextCount.current) {
        refTextCount.current.innerText = `${refCount.current}%`;
      }
      if (refCount.current === 90) {
        clearInterval(refInterval);
      }
      if (refProgress.current) {
        refProgress.current.style.width = `${refCount.current}%`;
      }
      refCount.current = refCount.current + 10;
    }, 500);
  }, []);

  React.useEffect(() => {
    if (refTextCount.current) {
      refTextCount.current.innerText = `${refCount.current}%`;
    }
  }, [refCount.current]);
  React.useEffect(() => {
    (async () => {
      try {
        await dsmApi.sendEmail({
          type_send,
          subject,
          files,
          content,
        });

        if (refTextCount.current && refProgress.current) {
          refTextCount.current.innerText = "100%";
          refProgress.current.style.width = "100%";
        }
        setTimeout(() => {
          turnOffPopup();
          toast.success("Send email success");
        }, 500);
      } catch (error) {
        if (refTextCount.current && refProgress.current) {
          refTextCount.current.innerText = "100%";
          refProgress.current.style.width = "100%";
        }
        setTimeout(() => {
          turnOffPopup();
          toast.error("Send email failed, Please try again.");
        }, 500);
      }
    })();
  }, []);
  return (
    <Popup open={isOpen} closeOnDocumentClick={false}>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <div className="title text-center">
          <h3>Sending Email</h3>
        </div>

        <div className="item">
          <div
            className="item_content d-flex justify-content-between"
            style={{
              fontSize: "1.2rem",
            }}
          >
            <span> {"Please waiting..."} </span>
            <span className="text-left" ref={refTextCount}>{`${10}%`}</span>
          </div>
          <div className="progress">
            <div
              ref={refProgress}
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={10}
              style={{
                width: "10%",
              }}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </Popup>
  );
};
