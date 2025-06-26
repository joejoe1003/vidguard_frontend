import { File as FileIcon, Trash as TrashIcon, Upload as UploadIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";

import styles from "./styles.ts";

export default function Upload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"pending" | "uploading" | "success" | "error">("pending");

const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  setStatus("pending");
  setFile(e.dataTransfer.files[0]);
};

const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const handleUpload = () => {
  setStatus("uploading");

  const formData = new FormData();
  formData.append("file", file!);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "<http://localhost:3000/upload>");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }
  };

  xhr.send(formData);
};

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpload();
      }}
      onReset={() => {
        setStatus("pending");
        setFile(null);
      }}

    >

      <div style={styles.uploadBox} 
            onClick={() => inputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
        <div style={styles.content}>
          <div style={styles.circle}>
            <UploadIcon size={32} style={{backgroundColor:'white' }}/>
          </div>

          <h2 style={styles.uploadText}> Upload </h2>
 
            <h3 style={{color:'grey', fontSize:'14px'}}>
                Support MP4, AVI, MOV format
            </h3>
        </div>
      </div>
      <input
        type="file"
        onChange={(e) => {
          setStatus("pending");
          setFile(e.target.files?.[0] || null);
        }}
        hidden
        ref={inputRef}
      />

      {file && (
        <>
          <div style={styles.fileList}>
            <div style={styles.fileElement}>
              <div>
                <FileIcon size={32} />
              </div>
              <div style={styles.fileDetails}>
                <p style={styles.fileName}>{file.name}</p>
                <p style={styles.fileSize}>{(file.size / 1024).toFixed(2)} KB</p>
              </div>

              <div style={styles.filler} />

              {status === "pending" && (
                <button
                  style={styles.trash}
                  onClick={(e) => {
                    e.preventDefault();
                    if (inputRef.current) {
                      inputRef.current.value = "";
                    }
                    setFile(null);
                  }}
                >
                  <TrashIcon size={32} />
                </button>
              )}
              {status === "uploading" && <p style={styles.uploadingText}>Uploading...</p>}
              {status === "success" && <p style={styles.successText}>File uploaded successfully!</p>}
              {status === "error" && <p style={styles.errorText}>File upload failed!</p>}
            </div>
          </div>
          <div style={styles.uploadButtonContainer}>
            {status === "success" ? (
              <button style={styles.uploadButton} type="reset">
                Reset
              </button>
            ) : (
              <button style={styles.uploadButton} type="submit" disabled={status === "uploading"}>
                Upload Files
              </button>
            )}
          </div>
        </>
      )}
    </form>

    
  );
}

