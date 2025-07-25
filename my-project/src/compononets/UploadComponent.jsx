import React, { useState } from "react";

const UploadComponent = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      setFiles(Array.from(event.dataTransfer.files));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      {/* Dropzone */}
      <div
        className=" p-3 resize-none border-gray-100 w-[42vw] h-[25vh] max-md:w-[70vw] border-2 border-dashed border-[#A020EF4D] rounded-lg flex flex-col justify-center items-center bg-white hover:bg-gray-50 transition"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          multiple
          className="hidden"
          id="file-upload"
          onChange={handleFileUpload}
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="text-purple-600 text-2xl mb-2 flex items-center justify-center">
            <svg
              width="69"
              height="60"
              viewBox="0 0 69 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.029 14.7458L36.1212 14.7733L36.1253 14.7688C36.5629 14.8481 36.9971 14.586 37.1257 14.1519C38.2973 10.2152 41.9884 7.46504 46.1008 7.46504C46.5877 7.46504 46.9826 7.07016 46.9826 6.5833C46.9826 6.09643 46.5877 5.70156 46.1008 5.70156C41.0467 5.70156 36.7995 9.06665 35.4358 13.6493C35.2966 14.1162 35.5625 14.6067 36.029 14.7458Z"
                fill="#A020EF"
                stroke="#F9FFF9"
                strokeWidth="0.3"
              />
              <path
                d="M56.3438 42.4384H51.9534C51.5494 42.4384 51.2217 42.1107 51.2217 41.7067C51.2217 41.3027 51.5494 40.9749 51.9534 40.9749H56.3438C62.3956 40.9749 67.3197 36.0509 67.3197 29.999C67.3197 23.9471 62.3956 19.023 56.3438 19.023H56.2382C56.026 19.023 55.8242 18.9311 55.6852 18.7706C55.5462 18.6101 55.4834 18.3974 55.5138 18.1873C55.5791 17.7315 55.612 17.2737 55.612 16.8279C55.612 11.5829 51.3444 7.31531 46.0995 7.31531C44.059 7.31531 42.1131 7.95296 40.4719 9.15978C40.1112 9.42478 39.599 9.30718 39.3905 8.91047C34.7425 0.0596993 22.6023 -1.12887 16.3082 6.57053C13.6568 9.81417 12.615 14.0336 13.4498 18.146C13.5418 18.6002 13.1942 19.0236 12.7327 19.0236H12.4395C6.3876 19.0236 1.46353 23.9477 1.46353 29.9996C1.46353 36.0514 6.3876 40.9755 12.4395 40.9755H16.8298C17.2338 40.9755 17.5615 41.3032 17.5615 41.7072C17.5615 42.1113 17.2338 42.439 16.8298 42.439H12.4395C5.5805 42.439 0 36.8585 0 29.9995C0 23.3329 5.27155 17.8742 11.8651 17.5731C11.2457 13.3066 12.4301 9.00295 15.1751 5.64437C21.9138 -2.5996 34.828 -1.67556 40.2871 7.51707C42.0287 6.42522 44.0215 5.85244 46.0992 5.85244C52.4538 5.85244 57.4892 11.261 57.0486 17.58C63.5813 17.9463 68.7829 23.3763 68.7829 29.999C68.7829 36.8585 63.2024 42.4384 56.3434 42.4384L56.3438 42.4384Z"
                fill="#A020EF"
              />
              <path
                d="M15.85 41.2935C15.85 51.4634 24.1237 59.737 34.2935 59.737C44.4634 59.737 52.737 51.4633 52.737 41.2935C52.737 31.1235 44.4634 22.85 34.2935 22.85C24.1235 22.85 15.85 31.1237 15.85 41.2935ZM17.6138 41.2935C17.6138 32.0966 25.0964 24.6138 34.2935 24.6138C43.4904 24.6138 50.9732 32.0964 50.9732 41.2935C50.9732 50.4904 43.4904 57.9732 34.2935 57.9732C25.0966 57.9732 17.6138 50.4905 17.6138 41.2935Z"
                fill="#A020EF"
                stroke="#F9FFF9"
                strokeWidth="0.3"
              />
              <path
                d="M33.9418 48.6577C33.9418 49.0363 34.2489 49.3434 34.6275 49.3434C35.0061 49.3434 35.3132 49.0367 35.3132 48.6577V34.7291C35.3132 34.3504 35.0061 34.0434 34.6275 34.0434C34.2489 34.0434 33.9418 34.3504 33.9418 34.7291V48.6577Z"
                fill="#A020EF"
                stroke="#A020EF"
                strokeWidth="0.3"
              />
              <path
                d="M34.6281 35.7001L30.8274 39.5008L34.6281 35.7001ZM34.6281 35.7001L38.4289 39.5009C38.5626 39.6346 38.7386 39.7017 38.9137 39.7017L34.6281 35.7001ZM29.8576 39.5009C30.1254 39.7687 30.5597 39.7689 30.8273 39.5009L38.9138 39.7017C39.0886 39.7017 39.2647 39.6352 39.3987 39.5009C39.6665 39.233 39.6665 38.799 39.3986 38.5311L35.113 34.2455C34.8452 33.9777 34.4108 33.9775 34.1432 34.2455C34.1432 34.2455 34.1431 34.2456 34.1431 34.2456L29.8576 38.5311C29.5897 38.799 29.5897 39.233 29.8576 39.5009Z"
                fill="#A020EF"
                stroke="#A020EF"
                strokeWidth="0.3"
              />
            </svg>
          </div>
          <p className="text-black font-normal text-base">
            Drag & drop files or{" "}
            <span className="text-purple-600 underline cursor-pointer">
              Browse
            </span>
          </p>
        </label>
        <p className="text-gray-400 text-sm mt-2">
          Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
        </p>
      </div>

      {/* File Preview */}
      <div className="mt-4 text-gray-800">
        {files.length > 0 ? (
          files.map((file) => (
            <p key={file.name} className="text-sm">
              {file.name}
            </p>
          ))
        ) : (
          <p className="text-sm text-gray-500">No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
