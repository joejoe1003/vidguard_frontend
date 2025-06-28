import { File as FileIcon, Trash as TrashIcon, Upload as UploadIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Button} from '@radix-ui/themes';
import styles from "./styles.ts";

export default function Upload() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"pending" | "uploading" | "success" | "error">("pending");

const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
  setStatus("pending");
  const droppedFiles = Array.from(e.dataTransfer.files);
  const videoFiles = droppedFiles.filter(file => 
      file.type.startsWith("video/") && 
      ["video/mp4", "video/avi", "video/quicktime"].includes(file.type)
    );
    
    setFiles(prev => [...prev, ...videoFiles]);
};

const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};

const handleUpload = () => {
  setStatus("uploading");

  const formData = new FormData();
  files.forEach((file, index) => {
      formData.append(`file-${index}`, file);
    });

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

// 删除单个文件
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpload();
      }}
      onReset={() => {
        setStatus("pending");
        setFiles([]);
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
          const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
          
          // 过滤视频文件
          const videoFiles = selectedFiles.filter(file => 
            file.type.startsWith("video/") && 
            ["video/mp4", "video/avi", "video/quicktime"].includes(file.type)
          );
          
          setFiles(prev => [...prev, ...videoFiles]);
        }}
        hidden
        ref={inputRef}
      />

      {files.length > 0 && (
        <>
          <div style={styles.fileList}>
            {files.map((file, index) => (
              <div key={index} style={styles.fileElement}>
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
                      removeFile(index);
                    }}
                  >
                    <TrashIcon size={32} />
                  </button>
                )}
              </div>
            ))}
            </div>
            
            {/* 全局状态显示 */}
            <div style={styles.statusContainer}>
              {status === "uploading" && <p style={styles.uploadingText}>Uploading {files.length} files...</p>}
              {status === "success" && <p style={styles.successText}>All files uploaded successfully!</p>}
              {status === "error" && <p style={styles.errorText}>File upload failed!</p>}
            </div>
          
          
          <div style={styles.uploadButtonContainer}>
            {status === "success" ? (
              <button style={styles.uploadButton} type="reset">
                Reset
              </button>
            ) : (
              <Button type="submit" color="gray" variant="surface">
                Upload {files.length} Files
              </Button>
            )}
          </div>
          
        </>
        
      )}
    </form>
  );
}
