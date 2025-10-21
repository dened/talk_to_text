# TalkToText Service

**TalkToText** is a simple learning project designed to explore **Node.js backend** and **Solid.js frontend**, focusing on converting audio and video files into text. This project is primarily intended for **educational purposes** and hands-on experience with full-stack JavaScript development.  

## 🎯 Project Goals

1. **Learning & Experimentation**  
   - Practice building a scalable backend with Node.js.  
   - Work with queues, background workers, and task processing.  
   - Explore frontend development with Solid.js.  

2. **Audio to Text Conversion**  
   - Accept audio or video file uploads via a web interface.  
   - Split long audio files into chunks to process them efficiently.  
   - Transcribe audio into text using local or external services (e.g., Whisper).  
   - Store the resulting transcripts in a database.  

3. **Scalable Architecture (Pet Project Level)**  
   - Demonstrate a modular system with tasks/jobs for processing files.  
   - Provide an extendable architecture for future features like OAuth authentication or multiple transcription backends.  

## 🚀 Features (Planned)

- File upload and management  
- Audio chunking (max 8 minutes per chunk)  
- Transcription tasks with local Whisper or cloud services  
- Background processing with a job queue (BullMQ + Redis)  
- Simple Solid.js frontend to upload files and view transcripts  
- Database storage for transcripts and file metadata  

## ⚡ Tech Stack

- **Backend:** Node.js, Express, TypeScript  
- **Frontend:** Solid.js  
- **Queue & Workers:** BullMQ, Redis  
- **Storage:** S3-compatible (MinIO or AWS S3)  
- **Transcription:** Whisper local or external APIs  
- **Database:** PostgreSQL  

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

*   **Node.js** (v18 or newer recommended)
*   **npm** (usually comes with Node.js)

### Installation and Running

1.  **Install Dependencies**

    This command will install all the packages listed in `package.json`.
    ```bash
    npm install
    ```

2.  **Build the Project**

    This command compiles the TypeScript code from the `src` folder into JavaScript code in the `dist` folder.
    ```bash
    npm run build
    ```

3.  **Start the Server**

    This command starts the server. Once running, it will be available at `http://localhost:3000`.
    ```bash
    npm run start
    ```

## 📝 Notes

- This project is **not production-ready**; it is a **learning tool**.  
- Designed for small-scale usage and local experimentation.  
- Future updates may include authentication (Google/Apple OAuth), SSR, or cloud scaling.
